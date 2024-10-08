import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Section from './Section';
import Map from './Map';
import Photo from './Photo';
import Onas from './Content/Onas';
import Aktualnosci from './Content/Aktualnosci';
import Oferta from './Content/Oferta';
import Rozklad from './Content/Rozklad';
import Flota from './Content/Flota';
import Loader from './Loader';
import CookiesInfo from './CookiesInfo';
import { HashRouter, Redirect, Route, Switch, } from 'react-router-dom/cjs/react-router-dom.min';
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
        <Switch>
          <Route exact path={toStart()}>
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
          <Route exact path={toFleat()}>
            <Section
              title="Nasza flota"
              content={<Flota />}
            />
          </Route>
          <Route path={toAboutUs()}>
            <Section
              title="O firmie „Kurier” s.c. Jankowscy"
              content={<Onas />}
            />
          </Route>
          <Route path={toContact()}>
            <Section
              title="Kontakt"
              content={<Kontakt />}
            />
            <Map />
          </Route>
          <Route path={toVechicle()}>
            <VechiclePage />
          </Route>
          <Route path={toMessage()}>
            <MessagePage />
          </Route>
          <Route path="/">
            <Redirect to={toStart()} />
          </Route>
        </Switch>
        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;
