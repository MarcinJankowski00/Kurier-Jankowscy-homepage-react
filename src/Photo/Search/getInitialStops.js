export const getInitialStartStop = () => {
    const defaultValue = {
        id: 1,
        name: 'Mońki–Dworcowa',
        Białystok: ['4:20', '5:15', '6:35', '7:25', '8:55', '10:00', '11:10', '12:20', '13:30', '14:35', '15:50', '17:10', '18:10', '19:20'],
        Mońki: ['6:17', '7:17', '8:37', '9:37', '10:57', '12:12', '13:22', '14:27', '15:42', '16:47', '17:52', '19:12', '20:12', '21:17'],
    };

    try {
        const raw = localStorage.getItem("startStop");
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && parsed.id && parsed.name) {
            return parsed;
        }
    } catch (e) {
        // parsing failed
    }

    return defaultValue;
};

export const getInitialEndStop = () => {
    const defaultValue = {
        id: 25,
        name: 'Białystok PKS',
        Białystok: ['5:16', '6:11', '7:31', '8:21', '9:51', '10:56', '12:06', '13:16', '14:26', '15:31', '16:46', '18:06', '19:06', '20:16'],
        Mońki: ['5:20', '6:20', '7:40', '8:40', '10:00', '11:15', '12:25', '13:30', '14:45', '15:50', '16:55', '18:15', '19:15', '20:20'],
    };

    try {
        const raw = localStorage.getItem("endStop");
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && parsed.id && parsed.name) {
            return parsed;
        }
    } catch (e) {
        // parsing failed
    }

    return defaultValue;
};