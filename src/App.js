import React, { useEffect } from 'react';
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
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { toAboutUs, toContact, toFleat, toMessage, toOffer, toSchedule, toStart, toVechicle } from './routes';
import MessagePage from './Content/Aktualnosci/MessagePage';
import VechiclePage from './Content/Flota/VechiclePage';
import Kontakt from './Content/Kontakt';

function App() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const originalPathname = window.location.search.replace("?", "");
    if (originalPathname && originalPathname !== location.pathname) {
      history.push(originalPathname);
    }
  }, [location, history]);

  return (
    <BrowserRouter>
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
        <Map />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
