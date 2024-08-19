import { Content, Wrapper } from "./styled";

const Container = () => (
    <Wrapper>
    <Content
        frameBorder="0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAgszjqTGliBAIGPpNXV0l2ag26_cULars&zoom=15&q=ul. Dworcowa 6, Mońki, 19-100, Polska"
        allowFullScreen
    />
    </Wrapper>
);

export default Container;