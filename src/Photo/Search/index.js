import React, { useState } from 'react';
import { Form, Header, Element, Text, Select, Button } from "./styled";

const Search = () => {
    const station = 1;
    const [startStop, setStartStop] = useState('');
    const [endStop, setEndStop] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    return (
        <Form>
            <Header>Wyszukiwarka połączeń</Header>
            <Element>
                <p>
                    <label>
                        <Text>
                            Z:
                        </Text>
                        <Select>
                            <option
                                key={station}
                                value={station}
                            >
                                {station}
                            </option>
                        </Select>
                    </label>
                </p>
                <p>
                    <label>
                        <Text>
                            Do:
                        </Text>
                        <Select>
                            <option
                                key={station}
                                value={station}
                            >
                                {station}
                            </option>
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
            <Button>Znajdź połączenie</Button>
        </Form>
    );
};

export default Search;