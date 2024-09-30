import { useState, useEffect } from 'react';
import { Container, LoaderWrapper } from "./styled";
import { data } from './data';
import ContentItem from './ContentItem';
import Spinner from '../../Spinner';

const Flota = () => {
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);

    const loadImages = async () => {
        const promises = data.map(item => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = item.images[0].original;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        await Promise.all([
            Promise.all(promises),
            new Promise(resolve => setTimeout(resolve, 1000))
        ]);
        setAllImagesLoaded(true);
    };

    useEffect(() => {
        loadImages();
    }, []);

    return (
        <>
            {!allImagesLoaded ?
                <LoaderWrapper>
                    <Spinner />
                </LoaderWrapper>
                :
                <Container>
                    {data.map((item) => (
                        <ContentItem
                            key={item.id}
                            item={item}
                        />
                    ))}
                </Container>
            }
        </>
    );
}

export default Flota;