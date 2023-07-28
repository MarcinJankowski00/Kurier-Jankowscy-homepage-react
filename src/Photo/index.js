import { Image, Text, Button, Span } from "./styled";
import Search from "./Search";
import FileDownloadButton from './FileDownloadButton';
import handleLinkClick from "../HandleLinkClick.js";
import rozkladJazdy from '../RozkładJazdy.pdf';

const Photo = () => (
    <Image>
        <Text>
            <Span>
            Zawsze na czas,<br />
            wygodnie i bezpiecznie!<br />
            </Span>
            <Button onClick={(event) => handleLinkClick(event, 'Rozklad')}>
                Sprawdź rozkład jazdy
            </Button>
            <FileDownloadButton
                filename="Rozkład jazdy.pdf"
                src={rozkladJazdy}
            />
        </Text>
        <Search />
    </Image>
);

export default Photo;