import React, { useEffect, useState } from 'react';
import { Image, Text, Button, Span, Buttons, Content, Background } from "./styled";
import Search from "./Search";
import FileDownloadButton from './FileDownloadButton';
import handleLinkClick from "../HandleLinkClick.js";
import rozkladJazdy from '../RozkładJazdy.pdf';

const Photo = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY * 0.2); // Adjust the parallax effect by changing the multiplier
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <Image>
            <Background offset={offset} />
            <Content>
                <div>
                    <Text>
                        <Span>
                            Zawsze na czas,<br />
                            wygodnie i bezpiecznie!<br />
                        </Span>
                    </Text>
                    <Buttons>
                        <Button onClick={(event) => handleLinkClick(event, 'Rozklad')}>
                            Sprawdź rozkład jazdy
                        </Button>
                        <FileDownloadButton
                            filename="Rozkład jazdy.pdf"
                            src={rozkladJazdy}
                        />
                    </Buttons>
                </div>
                <Search />
            </Content>
        </Image>
    )
};

export default Photo;