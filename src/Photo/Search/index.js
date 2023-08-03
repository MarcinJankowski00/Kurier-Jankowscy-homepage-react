import React, { useState } from 'react';
import { Form, Header, Element, Text, Select, Button } from "./styled";
import Modal from "./Modal";
import Result from "./Result";
import { busStops } from './BusStops.js';

const Search = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    // Funkcja otwierająca okno modalne
    const openModal = () => {
        setModalOpen(true);
    };

    // Funkcja zamykająca okno modalne
    const closeModal = () => {
        setModalOpen(false);
    };
    const [startStop, setStartStop] = useState('Mońki – Dworcowa');
    const [endStop, setEndStop] = useState('Dworzec PKS');

    const dzisiaj = new Date().toISOString().slice(0, 10);
    const [departureDate, setDepartureDate] = useState(dzisiaj);
    
    return (
        <Form>
            <Header>Wyszukiwarka połączeń</Header>
            <Element>
                <p>
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
                </p>
                <p>
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
                </p>
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
            <Button onClick={openModal}>Znajdź połączenie</Button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                
                    <Result 
                        startStop = {startStop}
                        endStop = {endStop}
                        departureDate = {departureDate} 
                    />
            </Modal>
        </Form>
    );
};

export default Search;