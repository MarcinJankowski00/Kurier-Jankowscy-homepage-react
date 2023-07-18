import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Section from './Section';
import Container from './Container';
import Photo from './Photo';
import Onas from './Content/Onas';
import Aktualnosci from './Content/Aktualnosci';
import Oferta from './Content/Oferta';
import Rozklad from './Content/Rozklad';
import Flota from './Content/Flota';

function App() {

  return (
    <main>
      <Navigation />
      <Photo />
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
          title="Nasza flota"
          content={<Flota />}
          adress="Flota"
        />
      </Container>
      <Footer />
    </main>
  );
}

export default App;
