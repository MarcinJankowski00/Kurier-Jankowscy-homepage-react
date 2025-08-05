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
import MyData from './Content/MyData';
import MyTickets from './Content/MyTickets';
import BuyTicket from './Content/BuyTicket';
import CookiesInfo from './CookiesInfo';
import { HashRouter, Redirect, Route, Switch, } from 'react-router-dom/cjs/react-router-dom.min';
import { toAboutUs, toBuyTicket, toContact, toFleat, toMessage, toMyData, toMyTickets, toOffer, toSchedule, toStart, toVechicle } from './routes';
import MessagePage from './Content/Aktualnosci/MessagePage';
import VechiclePage from './Content/Flota/VechiclePage';
import Kontakt from './Content/Kontakt';
import { TicketPurchaseProvider } from './context/TicketPurchaseContext';

function App() {

  return (
    <HashRouter>
      <main>
        <CookiesInfo />
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

          <Route path={toBuyTicket()}>
            <TicketPurchaseProvider>
              <Section
                title="Kup bilet miesięczny"
                content={<BuyTicket />}
              />
            </TicketPurchaseProvider>
          </Route>
          <Route path={toMyTickets()}>
            <Section
              title="Moje bilety"
              content={<MyTickets />}
            />
          </Route>
          <Route path={toMyData()}>
            <Section
              title="Moje dane"
              content={<MyData />}
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
        <Footer />
      </main>
    </HashRouter>
  );
}

export default App;
