import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Section from './Section';
import Container from './Container';


function App() {

  return (
    <Container>
      <Header />
      <Navigation />
      <Section
        title="Aktualności"
        content="{Aktualności}"
      />
      <Section
        title="O nas"
        content="{Onas}"
      />
      <Section
        title="Oferta"
        content="{Oferta}"
      />
      <Footer />
    </Container>
  );
}

export default App;
