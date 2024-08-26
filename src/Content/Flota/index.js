import { Container } from "./styled";
import { data } from './data';
import ContentItem from './ContentItem';

const Flota = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <Container>
            {data.map((item) => (
                <ContentItem 
                    key={item.id} 
                    item={item} 
                    scrollToTop={scrollToTop} 
                />
            ))}
        </Container>
    );
}

export default Flota;