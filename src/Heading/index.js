import { Main } from "./styled";

const Heading = ({ children }) => (
    <Main className="fixed-navigation">
        {children}
    </Main>
);

export default Heading;