import React, { useState } from 'react';
import { Form, Header, Element, Text, Select, Button, Wrapper, Switch, Div, DateDiv, Magnifiericon, Span, Switchicon, Input } from "./styled";
import Modal from "./Modal";
import Result from "./Result";
import { busStops } from './BusStops.js';
import magnifiericon from "./magnifiericon.png";
import switchicon from "./switchicon.png";

const Search = () => {
    const [isModalOpen, setModalOpen] = useState("false");
    const openModal = () => {
        setModalOpen("true");
    };
    const closeModal = () => {
        setModalOpen("false");
    };

    const [startStop, setStartStop] = useState('Mońki–Dworcowa');
    const [endStop, setEndStop] = useState('Białystok PKS');

    const dzisiaj = new Date().toISOString().slice(0, 10);
    const [departureDate, setDepartureDate] = useState(dzisiaj);

    const switchStops = () => {
        let holder = endStop;
        setEndStop(startStop);
        setStartStop(holder);
    };

    return (
        <Form>
            <Header>Wyszukaj połączenie</Header>
            <Element>
                <Wrapper>
                    <Div>
                        <label htmlFor="startStationSelect">
                            <Span>
                                Z:
                            </Span>
                            <Select
                                id="startStationSelect"
                                value={startStop}
                                onChange={({ target }) => setStartStop(target.value)}
                            >
                                {busStops.map((station) => (
                                    <option
                                        key={station.id}
                                        value={station.name}
                                    >
                                        {station.name}
                                    </option>
                                ))}
                            </Select>
                        </label>
                        <label htmlFor="endStationSelect">
                            <Span>
                                Do:
                            </Span>
                            <Select
                                id="endStationSelect"
                                value={endStop}
                                onChange={({ target }) => setEndStop(target.value)}
                            >
                                {busStops.map((station) => (
                                    <option
                                        key={station.id}
                                        value={station.name}
                                    >
                                        {station.name}
                                    </option>
                                ))}
                            </Select>
                        </label>
                    </Div>
                    <Switch onClick={switchStops}><Switchicon src={switchicon}/></Switch>
                </Wrapper>
                <DateDiv>
                    <label>
                        <Span>
                            Data:
                        </Span>
                        <Input
                            type="Date"
                            value={departureDate}
                            onChange={(e) => {
                                setDepartureDate(e.target.value)
                            }}
                        />
                    </label>
                </DateDiv>
            </Element>
            <Button onClick={openModal}><Text>Znajdź połączenie</Text> <Magnifiericon src={magnifiericon} /></Button>
            <Modal isopen={isModalOpen} onClose={closeModal}>
                <Result
                    startStop={startStop}
                    endStop={endStop}
                    departureDate={departureDate}
                />
            </Modal>
        </Form>
    );
};

export default Search;