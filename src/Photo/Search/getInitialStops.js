export const getInitialStartStop = () => {
    const localStorageStartStop = localStorage.getItem("startStop");
    if (localStorageStartStop === null) {
        return 'Mońki–Dworcowa';
    }
    return JSON.parse(localStorage.getItem("startStop"));
};

export const getInitialEndStop = () => {
    const localStorageEndStop = localStorage.getItem("endStop");
    if (localStorageEndStop === null) {
        return 'Białystok PKS';
    }
    return JSON.parse(localStorage.getItem("endStop"));
};