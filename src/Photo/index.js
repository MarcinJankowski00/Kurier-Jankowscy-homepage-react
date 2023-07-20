import { Image, Text, Button, Span } from "./styled";
import FileDownloadButton from './FileDownloadButton';
import handleLinkClick from "../HandleLinkClick.js";
import exampleFile from '../example.pdf';

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
                filename="example.pdf"
                src={exampleFile}
            />
        </Text>
    </Image>
);

export default Photo;