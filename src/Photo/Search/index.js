import { useState, useEffect } from 'react';
import { Form, Container, Header, Element, Text, Button, Wrapper, Switch, Div, Label, DateDiv, StyledMagnifierIcon, Span, StyledLoopIcon, Input } from "./styled";
import Modal from "../../Modal";
import Result from "./Result";
import { getInitialEndStop, getInitialStartStop } from './getInitialStops';
import GenericDropdown from '../../GenericDropdown/index.js';
import { useData } from '../../context/DataContext.js';

const Search = () => {
    const { stops } = useData();
    const [isModalOpen, setModalOpen] = useState(false);
    const [startStop, setStartStop] = useState(getInitialStartStop);
    const [endStop, setEndStop] = useState(getInitialEndStop);
    const [departureDate, setDepartureDate] = useState(new Date());

    useEffect(() => {
        localStorage.setItem("startStop", JSON.stringify(startStop));
        localStorage.setItem("endStop", JSON.stringify(endStop));
    });

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const switchStops = () => {
        let holder = endStop;
        setEndStop(startStop);
        setStartStop(holder);
    };
    const formatDate = (date) => {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (day < 10) {
            day = `0${day}`;
        }
        if (month < 10) {
            month = `0${month}`;
        }
        return `${year}-${month}-${day}`;
    };

    const getNextDay = (date) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + 1);
        return newDate;
    };

    const handleDepartureDateChange = () => {
        setDepartureDate(getNextDay(departureDate));
    };


    return (
        <Form>
            <Container>
                <Header>Wyszukaj połączenie</Header>
                <Element>
                    <Wrapper>
                        <Div>
                            <Label htmlFor="startStationSelect">
                                <Span>
                                    Z
                                </Span>
                                <GenericDropdown
                                    items={stops}
                                    selected={startStop}
                                    onSelect={setStartStop}
                                    getLabel={(item) => item.name}
                                />
                            </Label>
                            <Label htmlFor="startStationSelect">
                                <Span>
                                    Do
                                </Span>
                                <GenericDropdown
                                    items={stops}
                                    selected={endStop}
                                    onSelect={setEndStop}
                                    getLabel={(item) => item.name}
                                />
                            </Label>
                        </Div>
                        <Switch onClick={switchStops}><StyledLoopIcon /></Switch>
                    </Wrapper>
                    <DateDiv>
                        <label>
                            <Span />
                            <Input
                                type="Date"
                                value={formatDate(departureDate)}
                                onChange={(e) =>
                                    setDepartureDate(new Date(e.target.value))
                                }
                            />
                        </label>
                    </DateDiv>
                </Element>
                <Button onClick={openModal}><StyledMagnifierIcon /><Text>Znajdź połączenie</Text></Button>
            </Container>
            <Modal isModalOpen={isModalOpen} onClose={closeModal}>
                <Result
                    startStop={startStop.name}
                    endStop={endStop.name}
                    departureDate={departureDate}
                    onNextDayButtonClick={handleDepartureDateChange}
                />
            </Modal>
        </Form>
    );
};

export default Search;