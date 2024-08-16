import React, { useState, useEffect } from 'react';
import logo from "../kurierlogo.png";
import { Div, Img } from "./styled";

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsHidden(true);
        }, 1250);

        const timer2 = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }, []);
  
    if (isLoading) {
      return (
        <Div hidden={isHidden}>
          <Img src={logo} alt="Loading..." />
        </Div>
      );
    }
    return null;
  };

export default Loader;