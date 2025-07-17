import { useEffect, useState } from "react";
import { Label, Span, Wrapper, Price, SubmitButton } from "./styled";
import GenericDropdown from "../../GenericDropdown";
import { priceMatrix } from "../../Prices";
import { reliefs } from "../../Reliefs";
import { busStops } from "../../BusStops";
import { useAuth } from "../../context/AuthContext";

const BuyTicket = () => {
    const [startStop, setStartStop] = useState(busStops[0]);
    const [endStop, setEndStop] = useState(busStops[24]);
    const [direction, setDirection] = useState('one-way');
    const [relief, setRelief] = useState(0);
    const [selectedRelief, setSelectedRelief] = useState(reliefs["else"][0]);
    const { userData, buyTicket } = useAuth();
    const today = new Date();
    const nextMonth = today.getMonth() === 11 ? 0 : today.getMonth() + 1;
    const year = today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear();
    const month = nextMonth + 1;
    const formatMonthYear = (month, year) => {
        const date = new Date(year, month - 1);
        return date.toLocaleString("pl-PL", { month: "long", year: "numeric" });
    };

    const handleBuyTicket = async () => {
        const ticketData = {
            userId: userData._id,
            startStop: startStop.name,
            endStop: endStop.name,
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
        const startStopObject = busStops.find((station) => station.name === startStop.name);
        const endStopObject = busStops.find((station) => station.name === endStop.name);
        console.log(startStopObject);
        const startIndex = startStopObject.id - 1;
        const endIndex = endStopObject.id - 1;
        if (startIndex === -1 || endIndex === -1) return null;
        return (priceMatrix[direction === 'one-way' ? "monthly" : "monthlyRoundTrip"][startIndex][endIndex] * (1 - relief)).toFixed(2);
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
                    items={busStops}
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
                    items={busStops}
                    selected={endStop}
                    onSelect={setEndStop}
                    getLabel={(item) => item.name}
                />
            </Label>
            <GenericDropdown
                items={reliefs["monthly"]}
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

export default BuyTicket;