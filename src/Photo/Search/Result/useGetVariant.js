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
        '17-04-2033'
    ];
    const dates = saturdayBeforeEster.map(item => {
        const [day, month, year] = item.split('-');
        return new Date(`${year}-${month}-${day}`);
    });

    return dates.some(data => data.getTime() === myDate.getTime());
};

const getVariant = (departureDateStr) => {
    const departureDate = new Date(departureDateStr);
    if (
        (departureDate.getMonth() === 11 && (departureDate.getDate() === 25 || departureDate.getDate() === 26)) ||
        (departureDate.getMonth() === 0 && departureDate.getDate() === 1) ||
        isEster(departureDate)) {

        return 'brak'
    }
    else {
        if ((departureDate.getMonth() === 11 && (departureDate.getDate() === 24 || departureDate.getDate() === 31)) ||
            (isSaturdayBeforeEster(departureDate))) {
            if (departureDate.getDay() === 0) {
                return 'wariant5';
            }
            else {
                return 'wariant4';
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
                return 'wariant3';
            }
            else {
                if (
                    departureDate.getDay() === 6 ||
                    isFridayAfterBozeCialo(departureDate)) {
                    return 'wariant2';
                }
                else {
                    return 'wariant1';
                }
            }
        }
    };
}

export default getVariant;