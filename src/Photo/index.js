import { Image, Text, Button, Span, Buttons } from "./styled";
import Search from "./Search";
import FileDownloadButton from './FileDownloadButton';
import handleLinkClick from "../HandleLinkClick.js";
import rozkladJazdy from '../RozkładJazdy.pdf';

const Photo = () => (
    <Image>
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
    </Image>
);

export default Photo;