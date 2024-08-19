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
import { toAboutUs, toContact, toFleat, toMessage, toOffer, toSchedule, toStart, toVechicle } from './routes';
import MessagePage from './Content/Aktualnosci/MessagePage';
import VechiclePage from './Content/Flota/VechiclePage';
import Kontakt from './Content/Kontakt';

function App() {

  return (
    <HashRouter>
      <main>
        <CookiesInfo />
        <Loader />
        <Navigation />
        <Route path={toStart()}>
          <Photo />
          <Section
            title="Aktualności"
            content={<Aktualnosci />}
          />
        </Route>
        <Route path={toSchedule()}>
          <Section
            title="Rozkład jazdy"
            content={<Rozklad />}
          />
        </Route>
        <Route path={toOffer()}>
          <Section
            title="Oferta"
            content={<Oferta />}
          />
        </Route>
        <Route path={toFleat()}>
          <Section
            title="Nasza flota"
            content={<Flota />}
          />
        </Route>
        <Route path={toAboutUs()}>
          <Section
            title="O firmie „KURIER” s.c. Jankowscy"
            content={<Onas />}
          />
        </Route>
        <Route path={toContact()}>
          <Section
            title="Kontakt"
            content={<Kontakt />}
          />
        </Route>
        <Route path={toMessage()}>
            <MessagePage />
        </Route>
        <Route path={toVechicle()}>
            <VechiclePage />
        </Route>
        <Route path="/">
          <Redirect to={toStart()} />
        </Route>
        <Map />
        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;
