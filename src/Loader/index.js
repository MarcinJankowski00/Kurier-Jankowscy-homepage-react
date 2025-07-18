import logo from "../kurierlogo.png";
import { Div, Img } from "./styled";
import Spinner from '../Spinner';

const Loader = () => {

  return (
    <Div>
      <Img src={logo} alt="Loading..." /><br />
      <Spinner />
    </Div>
  );
};

export default Loader;