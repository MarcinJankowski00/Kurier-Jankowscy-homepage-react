import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Section from './Section';
import Container from './Container';
import Onas from './Content/Onas';
import Aktualnosci from './Content/Aktualnosci';
import Oferta from './Content/Oferta';
import Rozklad from './Content/Rozklad';


function App() {

  return (
    <main>
    <Header />
    <Navigation />
    <Container>
      <Section
        title="Aktualności"
        content={<Aktualnosci />}
        adress="Aktualnosci"
      />
      <Section
        title="O firmie „KURIER” s.c. Jankowscy"
        content={<Onas />}
        adres="Onas"
      />
      <Section
        title="OFERTA"
        content={<Oferta />}
        adres="Oferta"
      />
      <Section
        title="Rozkład jazdy"
        content={<Rozklad />}
        adres="Rozklad"
      />
    </Container>
    <Footer />
    </main>
  );
}

export default App;
