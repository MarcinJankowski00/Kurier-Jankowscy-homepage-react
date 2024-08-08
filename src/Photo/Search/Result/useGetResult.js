import { busStops } from "../../../BusStops";

const variant5 = [0, 1, 2, 4, 6, 8, 10, 11, 12, 13];
// Sylwester, Wigilia lub Wielka Sobota w niedzielę xd
const variant4 = [0, 2, 4, 6, 8, 10, 11, 12, 13];
// Sylwester, Wigilia lub Wielka Sobota
const variant3 = [0, 1, 2, 4, 6, 8, 10, 12, 13];
// Niedziele lub Święta lub Boże Ciało
const variant2 = [0, 2, 4, 6, 8, 10, 12, 13];
// Sobota lub Piątek przed Bożym Ciałem

const isBozeCialo = (myDate) => {
    const bozeCialo = [
        '08-06-2023',
        '30-05-2024',
        '19-06-2025',
        '04-06-2026',
        '27-05-2027',
        '15-06-2028',
        '31-05-2029',
        '20-06-2030',
        '12-06-2031',
        '27-05-2032',
        '16-06-2033'
    ];
    const dates = bozeCialo.map(item => {
        const [day, month, year] = item.split('-');
        return new Date(`${year}-${month}-${day}`);
    });

    return dates.some(data => data.getTime() === myDate.getTime());
};

const isFridayAfterBozeCialo = (myDate) => {
    const fridays = [
        '09-06-2023',
        '02-05-2024',
        '31-05-2024',
        '20-06-2025',
        '05-06-2026',
        '28-05-2027',
        '16-06-2028',
        '01-06-2029',
        '21-06-2030',
        '13-06-2031',
        '28-05-2032',
        '17-06-2033'
    ];
    const dates = fridays.map(item => {
        const [day, month, year] = item.split('-');
        return new Date(`${year}-${month}-${day}`);
    });

    return dates.some(data => data.getTime() === myDate.getTime());
};

const isEster = (myDate) => {
    const ester = [
        '09-04-2023',
        '31-03-2024',
        '20-04-2025',
        '05-04-2026',
        '28-03-2027',
        '16-04-2028',
        '01-04-2029',
        '21-04-2030',
        '13-04-2031',
        '28-03-2032',
        '17-04-2033',
        '10-04-2023',
        '01-04-2024',
        '21-04-2025',
        '06-04-2026',
        '29-03-2027',
        '17-04-2028',
        '02-04-2029',
        '22-04-2030',
        '14-04-2031',
        '29-03-2032',
        '18-04-2033'
    ];
    const dates = ester.map(item => {
        const [day, month, year] = item.split('-');
        return new Date(`${year}-${month}-${day}`);
    });

    return dates.some(data => data.getTime() === myDate.getTime());
};

const isSaturdayBeforeEster = (myDate) => {
    const saturdayBeforeEster = [
        '08-04-2023',
        '30-03-2024',
        '19-04-2025',
        '04-04-2026',
        '27-03-2027',
        '15-04-2028',
        '31-03-2029',
        '20-04-2030',
        '12-04-2031',
        '27-03-2032',
        '16-04-2033',
    ];
    const dates = saturdayBeforeEster.map(item => {
        const [day, month, year] = item.split('-');
        return new Date(`${year}-${month}-${day}`);
    });

    return dates.some(data => data.getTime() === myDate.getTime());
};

const deleteElements = (tab1, tab2) => {
    return tab1.filter((_, index) => !tab2.includes(index));
}

const getResult = (departureDateStr, startStop, endStop) => {
    const startStopObject = busStops.find((station) => station.name === startStop);
    const endStopObject = busStops.find((station) => station.name === endStop);
    const departureDate = new Date(departureDateStr);
    let direction = "";

    if (startStopObject.id > endStopObject.id) {
        direction = "Mońki";
    } else {
        direction = "Białystok";
    }

    if ((startStopObject.id === 20 || endStopObject.id === 20) && direction === "Białystok") {
        const result = 'errorFasty'
        return result;
    }

    if ((startStopObject.id === 24 || endStopObject.id === 24) && direction === "Mońki") {
        const result = 'errorB-stokPKP'
        return result;
    }

    if (
        (departureDate.getMonth() === 11 && (departureDate.getDate() === 25 || departureDate.getDate() === 26)) ||
        (departureDate.getMonth() === 0 && departureDate.getDate() === 1) ||
        isEster(departureDate)) {
        const result = 'brak';
        return result;
    }
    else {
        if ((departureDate.getMonth() === 11 && (departureDate.getDate() === 24 || departureDate.getDate() === 31)) ||
            (isSaturdayBeforeEster(departureDate))) {
            if (departureDate.getDay() === 0) {
                const result = {
                    startStopTab: deleteElements(startStopObject[direction], variant5),
                    endStopTab: deleteElements(endStopObject[direction], variant5)
                }
                return result;
            }
            else {
                const result = {
                    startStopTab: deleteElements(startStopObject[direction], variant4),
                    endStopTab: deleteElements(endStopObject[direction], variant4)
                }
                return result;
            }
        }
        else {
            if (
                departureDate.getDay() === 0 ||
                isBozeCialo(departureDate) ||
                (departureDate.getMonth() === 4 && (departureDate.getDate() === 1 || departureDate.getDate() === 3)) ||
                (departureDate.getMonth() === 0 && departureDate.getDate() === 6) ||
                (departureDate.getMonth() === 7 && departureDate.getDate() === 15) ||
                (departureDate.getMonth() === 10 && (departureDate.getDate() === 1 || departureDate.getDate() === 11))) {
                const result = {
                    startStopTab: deleteElements(startStopObject[direction], variant3),
                    endStopTab: deleteElements(endStopObject[direction], variant3)
                }
                return result;
            }
            else {
                if (
                    departureDate.getDay() === 6 ||
                    isFridayAfterBozeCialo(departureDate)) {
                    const result = {
                        startStopTab: deleteElements(startStopObject[direction], variant2),
                        endStopTab: deleteElements(endStopObject[direction], variant2)
                    }
                    return result;
                }
                else {
                    const result = {
                        startStopTab: startStopObject[direction],
                        endStopTab: endStopObject[direction]
                    }
                    return result;
                }
            }
        }
    };
}

export default getResult;