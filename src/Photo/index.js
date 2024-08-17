import React, { useEffect, useState } from 'react';
import { Image, Text, Button, Span, Buttons, Content, Background } from "./styled";
import Search from "./Search";
import FileDownloadButton from '../FileDownloadButton';
import handleLinkClick from "../HandleLinkClick.js";
import rozkladJazdy from '../RozkładJazdy.pdf';
import { toSchedule } from '../routes.js';

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };


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
                        <Button to={toSchedule} onClick={scrollToTop}>
                            Sprawdź rozkład jazdy
                        </Button>
                        <FileDownloadButton
                            filename="Rozkład jazdy.pdf"
                            src={rozkladJazdy}
                            variant="photo"
                            label="Pobierz rozkład jazdy"
                        />
                    </Buttons>
                </div>
                <Search />
            </Content>
        </Image>
    )
};

export default Photo;