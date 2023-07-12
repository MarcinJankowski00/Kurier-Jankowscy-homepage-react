import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Section from './Section';
import Container from './Container';
import Onas from './Content/Onas';
import Aktualnosci from './Content/Aktualnosci';
import Oferta from './Content/Oferta';


function App() {

  return (
    <Container>
      <Header />
      <Navigation />
      <Section
        title="Aktualności"
        content={<Aktualnosci />}
      />
      <Section
        title="O firmie „KURIER” s.c. Jankowscy"
        content={<Onas />}
      />
      <Section
        title="OFERTA"
        content={<Oferta />}
      />
      <Footer />
    </Container>
  );
}

export default App;
