import React, { useState } from 'react';
import { Form, Header, Element, Text, Select, Button, Wrapper, Switch, Div } from "./styled";
import Modal from "./Modal";
import Result from "./Result";
import { busStops } from './BusStops.js';

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
            <Header>Wyszukiwarka połączeń</Header>
            <Element>
                <Wrapper>
                    <Div>

                        <label htmlFor="startStationSelect">
                            <Text>
                                Z:
                            </Text>
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
                            <Text>
                                Do:
                            </Text>
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
                    <Switch onClick={switchStops}>↕</Switch>
                </Wrapper>
                <p>
                    <label>
                        <Text>
                            Data:
                        </Text>
                        <input
                            type="Date"
                            value={departureDate}
                            onChange={(e) => {
                                setDepartureDate(e.target.value)
                            }}
                        />
                    </label>
                </p>
            </Element>
            <Button onClick={openModal}>Znajdź połączenie 🔎</Button>
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