import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Section from './Section';
import Container from './Container';
import Heading from './Heading';
import Onas from './Content/Onas';
import Aktualnosci from './Content/Aktualnosci';
import Oferta from './Content/Oferta';
import Rozklad from './Content/Rozklad';
import Flota from './Content/Flota';


function App() {

  return (
    <main>
    <Heading>
      <Header />
      <Navigation />
    </Heading>
    <Container>
      <Section
        title="Aktualności"
        content={<Aktualnosci />}
        adress="Aktualnosci"
      />
      <Section
        title="O firmie „KURIER” s.c. Jankowscy"
        content={<Onas />}
        adress="Onas"
      />
      <Section
        title="OFERTA"
        content={<Oferta />}
        adress="Oferta"
      />
      <Section
        title="Rozkład jazdy"
        content={<Rozklad />}
        adress="Rozklad"
      />
      <Section
        title="Flota"
        content={<Flota />}
        adress="Flota"
      />
    </Container>
    <Footer />
    </main>
  );
}

export default App;
