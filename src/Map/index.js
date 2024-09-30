import { useState } from 'react';
import { Content, Wrapper, LoaderWrapper } from "./styled"; // Zakładam, że masz te styled components
import Spinner from '../Spinner';

const Container = () => {
    const [isLoaded, setIsLoaded] = useState(false); // Stan śledzący ładowanie iframe
    const [loading, setLoading] = useState(true); // Dodatkowy stan dla loadera z opóźnieniem

    const handleLoad = () => {
        // Zapewnia, że loader jest widoczny przez co najmniej 1 sekundę
        setTimeout(() => {
            setLoading(false); // Ukryj loader po 1 sekundzie
            setIsLoaded(true); // Wyświetl iframe
        }, 1000); // Opóźnienie wynosi 1 sekundę
    };

    return (
        <Wrapper>
            {loading && (
                <LoaderWrapper>
                    <Spinner />
                </LoaderWrapper>
            )}

            <Content
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAgszjqTGliBAIGPpNXV0l2ag26_cULars&zoom=15&q=ul. Dworcowa 6, Mońki, 19-100, Polska"
                allowFullScreen
                onLoad={handleLoad}
                style={{ display: isLoaded ? 'block' : 'none' }}
            />
        </Wrapper>
    );
};

export default Container;