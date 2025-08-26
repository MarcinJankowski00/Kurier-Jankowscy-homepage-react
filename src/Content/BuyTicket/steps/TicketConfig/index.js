import { useEffect, useState } from "react";
import { Label, Span, Wrapper, Price } from "./styled";
import GenericDropdown from "../../../../GenericDropdown";
import { useData } from "../../../../context/DataContext";
import { useTicketPurchase } from "../../../../context/TicketPurchaseContext";

const TicketConfig = () => {
    const { stops, prices, reliefs } = useData();
    const { ticketData, updateTicketData } = useTicketPurchase();
    const filteredReliefs = reliefs.filter(r => r.type === "monthly");
    const sorted = filteredReliefs
        .filter(obj => obj.value !== 0)
        .sort((a, b) => a.name.localeCompare(b.name));

    const monthlyReliefs = [
        filteredReliefs.find(obj => obj.value === 0),
        ...sorted
    ];
    function removeById(array, id) {
        return array.filter(item => item.id !== id);
    }

    const [startStop, setStartStop] = useState(ticketData.startStop);
    const [endStop, setEndStop] = useState(ticketData.endStop);
    const [direction, setDirection] = useState(ticketData.direction);
    const [relief, setRelief] = useState(ticketData.relief.value);
    const [selectedRelief, setSelectedRelief] = useState(ticketData.relief);
    const year = ticketData.year;
    const month = ticketData.month;
    const formatMonthYear = (month, year) => {
        const date = new Date(year, month - 1);
        return date.toLocaleString("pl-PL", { month: "long", year: "numeric" });
    };

    const getTicketPrice = (startStop, endStop, relief, direction) => {
        const startStopObject = stops.find((station) => station.name === startStop.name);
        const endStopObject = stops.find((station) => station.name === endStop.name);
        const startIndex = startStopObject.id - 1;
        const endIndex = endStopObject.id - 1;
        if (startIndex === -1 || endIndex === -1) return null;
        const typeOfTicket = direction === 'one-way' ? "monthly" : "monthlyRoundTrip";
        const monthlyRelief = prices.find(r => r.type === typeOfTicket);
        return (monthlyRelief.value[startIndex][endIndex] * (1 - relief)).toFixed(2);
    };

    const handleChange = (e) => {
        setDirection(e.target.value);
        updateTicketData({ direction: e.target.value })
    }
    useEffect(() => {
        if (selectedRelief?.value !== undefined) {
            setRelief(Number(selectedRelief.value));
        }
    }, [selectedRelief]);

    return (
        <Wrapper>
            <Label>
                <Span>
                    Z
                </Span>
                <GenericDropdown
                    items={removeById(stops, 24)}
                    selected={startStop}
                    onSelect={(item) => {
                        setStartStop(item);
                        updateTicketData({ startStop: item });
                    }}
                    getLabel={(item) => item.name}
                />
            </Label>
            <Label>
                <Span>
                    Do
                </Span>
                <GenericDropdown
                    items={stops}
                    selected={endStop}
                    onSelect={(item) => {
                        setEndStop(item);
                        updateTicketData({ endStop: item });
                    }}
                    getLabel={(item) => item.name}
                />
            </Label>
            <GenericDropdown
                items={monthlyReliefs}
                selected={selectedRelief}
                onSelect={(item) => {
                    setSelectedRelief(item);
                    updateTicketData({ relief: item });
                }}
                getLabel={(item) => item.name}
                getRightContent={(item) => `(${item.value * 100}%)`}
                getTooltip={(item) => item.description}
            />
            <Label>
                <label>
                    <input
                        type="radio"
                        name="direction"
                        value="one-way"
                        checked={direction === 'one-way'}
                        onChange={handleChange}
                    />
                    TAM
                </label>
                <label>
                    <input
                        type="radio"
                        name="direction"
                        value="round-trip"
                        checked={direction === 'round-trip'}
                        onChange={handleChange}
                    />
                    TAM/POWRÓT
                </label>
            </ Label>
            <span>Ważny: {formatMonthYear(month, year)}</span>
            <Price>
                {relief !== 0 ? `Ulga: - ${relief * 100}%` : ""}<br />
                Cena: {getTicketPrice(startStop, endStop, relief, direction)} zł
            </Price>
        </Wrapper>)
}

export default TicketConfig;