import React, { useState, useEffect } from 'react';
import logo from "../kurierlogo.png";
import { Div, Img } from "./styled";

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsHidden(false);
        }, 2500);

        const timer2 = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }, []);
  
    if (isLoading) {
      return (
        <Div hidden={isHidden ? false : true}>
          <Img src={logo} alt="Loading..." />
        </Div>
      );
    }
    return null;
  };

export default Loader;