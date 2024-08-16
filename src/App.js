import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Section from './Section';
import Container from './Container';
import Map from './Map';
import Photo from './Photo';
import Onas from './Content/Onas';
import Aktualnosci from './Content/Aktualnosci';
import Oferta from './Content/Oferta';
import Rozklad from './Content/Rozklad';
import Flota from './Content/Flota';
import Loader from './Loader';
import CookiesInfo from './CookiesInfo';
import { HashRouter, Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { toAboutUs, toFleat, toMessage, toOffer, toSchedule, toStart } from './routes';
import MessagePage from './Content/Aktualnosci/MessagePage';

function App() {

  return (
    <HashRouter>
      <main>
        <CookiesInfo />
        <Loader />
        <Navigation />
        <Photo />
        <Container>
          <Route path={toMessage()}>
            <MessagePage />
          </Route>
          <Route path={toStart()}>
            <Section
              title="Aktualności"
              content={<Aktualnosci />}
              adress="Aktualnosci"
            />
          </Route>
          <Route path={toSchedule()}>
            <Section
              title="Rozkład jazdy"
              content={<Rozklad />}
              adress="Rozklad"
            />
          </Route>
          <Route path={toOffer()}>
            <Section
              title="OFERTA"
              content={<Oferta />}
              adress="Oferta"
            />
          </Route>
          <Route path={toFleat()}>
            <Section
              title="Nasza flota"
              content={<Flota />}
              adress="Flota"
            />
          </Route>
          <Route path={toAboutUs()}>
            <Section
              title="O firmie „KURIER” s.c. Jankowscy"
              content={<Onas />}
              adress="Onas"
            />
          </Route>
          <Route path="/">
            <Redirect to={toStart()} />
          </Route>
        </Container>
        <Map />
        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;
