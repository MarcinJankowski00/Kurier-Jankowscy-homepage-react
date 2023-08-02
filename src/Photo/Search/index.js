import React, { useState } from 'react';
import { Form, Header, Element, Text, Select, Button } from "./styled";
import Modal from "./Modal";
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
    const calculateTimeDifference = (startHour, endHour) => {
        const [startHourStr, startMinStr] = startHour.split(":");
        const [endHourStr, endMinStr] = endHour.split(":");

        const startHourNum = parseInt(startHourStr, 10);
        const startMinNum = parseInt(startMinStr, 10);
        const endHourNum = parseInt(endHourStr, 10);
        const endMinNum = parseInt(endMinStr, 10);

        const startTotalMinutes = startHourNum * 60 + startMinNum;
        const endTotalMinutes = endHourNum * 60 + endMinNum;

        const timeDifference = endTotalMinutes - startTotalMinutes;

        return timeDifference;
    };

    const createResult = (startStop, endStop, departureDate) => {
        const startStopObject = busStops.find((station) => station.name === startStop);
        const endStopObject = busStops.find((station) => station.name === endStop);
        let direction = "";
        if (startStopObject.id > endStopObject.id) {
            direction = "Mońki";
        } else {
            direction = "Białystok";
        }
        console.log(startStopObject.wariant1[direction][0])
        const differenceInMinutes = calculateTimeDifference(startStopObject.wariant1[direction][0], endStopObject.wariant1[direction][0]);
        return (
            <ul>
                {startStopObject.wariant1[direction].map((item) => (
                    <li>
                        {item}-
                        {endStopObject.wariant1[direction][startStopObject.wariant1[direction].indexOf(item)]}{" "}
                        ({differenceInMinutes}min)
                    </li>
                ))}
            </ul>
        );
    };
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
                            type="date"
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                        />
                    </label>
                </p>
            </Element>
            <Button onClick={openModal}>Znajdź połączenie</Button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <p>Godziny odjazdu z <b>{startStop}</b> i przyjazdu do <b>{endStop}</b>
                    {createResult(startStop, endStop, departureDate)}</p>
            </Modal>
        </Form>
    );
};

export default Search;