import React, { useState, useEffect } from 'react';
import { CookieInfoContainer, CloseButton  } from "./styled";

const CookiesInfo = () => {
    const [showCookieInfo, setShowCookieInfo] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('cookieClosed') === 'true') {
            setShowCookieInfo(false);
        }
    }, []);

    const handleClose = () => {
        setShowCookieInfo(false);
        localStorage.setItem('cookieClosed', 'true');
    };
    return (
        <CookieInfoContainer show={showCookieInfo}>
            <p>
            Ta strona używa plików cookies. W każdym momencie można dokonać zmiany ustawień Państwa przeglądarki.<br />
            Więcej informacji w{' '}
                <a href="/PolitykaCookies.pdf">Polityce dotyczącej Plików Cookies</a>.
            </p>
            <CloseButton onClick={handleClose}>Akceptuj</CloseButton>
        </CookieInfoContainer>
    );
};

export default CookiesInfo;