import { useEffect, useState } from "react";
import { Label, Span, Wrapper, Price, SubmitButton } from "./styled";
import GenericDropdown from "../../../../GenericDropdown";
import { useData } from "../../../../context/DataContext";
import { useAuth } from "../../../../context/AuthContext";

const TicketConfig = () => {
    const { stops, prices, reliefs } = useData();
    const { userData, buyTicket } = useAuth();
    const monthlyReliefs = reliefs.filter(r => r.type === "monthly");
    const [startStop, setStartStop] = useState(stops[0]);
    const [endStop, setEndStop] = useState(stops[24]);
    const [direction, setDirection] = useState('one-way');
    const [relief, setRelief] = useState(0);
    const [selectedRelief, setSelectedRelief] = useState(monthlyReliefs[0]);
    const today = new Date();
    const nextMonth = today.getMonth() === 11 ? 0 : today.getMonth() + 1;
    const year = today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear();
    const month = nextMonth + 1;
    const formatMonthYear = (month, year) => {
        const date = new Date(year, month - 1);
        return date.toLocaleString("pl-PL", { month: "long", year: "numeric" });
    };

    const handleBuyTicket = async () => {
        const switchedStops = startStop.id > endStop.id ? true : false;
        const ticketData = {
            userId: userData._id,
            startStop: switchedStops ? endStop.name : startStop.name,
            endStop: switchedStops ? startStop.name : endStop.name,
            type: direction === "one-way" ? "monthly" : "monthlyRoundTrip",
            relief: selectedRelief,
            month: month,
            year: year,
            price: getTicketPrice(startStop, endStop, relief, direction),
        };

        try {
            const res = await fetch("http://localhost:5000/api/tickets/buy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(ticketData),
            });

            const data = await res.json();

            if (res.ok) {
                alert("✅ Bilet zakupiony!");
                buyTicket(localStorage.getItem("token"))
            } else {
                alert("❌ Błąd: " + data.message);
            }
        } catch (err) {
            console.error(err);
            alert("❌ Błąd sieci");
        }
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
                    items={stops}
                    selected={startStop}
                    onSelect={setStartStop}
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
                    onSelect={setEndStop}
                    getLabel={(item) => item.name}
                />
            </Label>
            <GenericDropdown
                items={monthlyReliefs}
                selected={selectedRelief}
                onSelect={setSelectedRelief}
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
                {relief !== 0 ? `Ulga: - ${relief*100}%` : ""}<br />
                Cena: {getTicketPrice(startStop, endStop, relief, direction)} zł
            </Price>
            <SubmitButton onClick={handleBuyTicket}>Kup bilet</SubmitButton>
        </Wrapper>)
}

export default TicketConfig;