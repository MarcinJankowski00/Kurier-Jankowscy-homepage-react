import { createContext, useContext, useState, useEffect } from "react";
import { useData } from "./DataContext";
import { useAuth } from "./AuthContext";
import Spinner from "../Spinner";

const TicketPurchaseContext = createContext();

export const TicketPurchaseProvider = ({ children }) => {
    const { stops, reliefs } = useData();
    const { userEmail, userData } = useAuth();

    const today = new Date();
    const nextMonth = today.getMonth() === 11 ? 0 : today.getMonth() + 1;
    const year = today.getMonth() === 11 ? today.getFullYear() + 1 : today.getFullYear();
    const month = nextMonth + 1;

    const [ticketData, setTicketData] = useState({
        userId: userData._id,
        startStop: stops[0],
        endStop: stops[24],
        type: "monthly",
        relief: reliefs.find(obj => obj.value === 0),
        direction: "one-way",
        passenger: null,
        month: month,
        year: year,
        email: '',
        name: '',
        surname: '',
        invoice: "none",
    });

    useEffect(() => {
        if (userData) {
            setTicketData(prev => ({
                ...prev,
                email: userEmail || '',
                invoiceEmail: userEmail || '',
                name: userData.name || '',
                surname: userData.surname || '',
                invoiceName: userData.name || '',
                invoiceSurname: userData.surname || '',
                street: userData.street || '',
                houseNumber: userData.houseNumber || '',
                zipCode: userData.zipCode || '',
                city: userData.city || '',
                contactNumber: userData.contactNumber || '',
                invoiceType: userData.invoiceType || 'none',
                companyName: userData.companyName || '',
                nip: userData.nip || '',
                companyStreet: userData.companyStreet || '',
                companyHouseNumber: userData.companyHouseNumber || '',
                companyCity: userData.companyCity || '',
                companyPostalCode: userData.companyPostalCode || '',
                companyEmail: userData.companyEmail || '',
            }));
        }
    }, [userData, userEmail]);

    if (!userData) {
        return <Spinner />;
    }

    const updateTicketData = (partialData) => {
        setTicketData((prev) => ({ ...prev, ...partialData }));
    };

    const resetTicketData = () => {
        setTicketData({});
    };

    return (
        <TicketPurchaseContext.Provider value={{ ticketData, updateTicketData, resetTicketData }}>
            {children}
        </TicketPurchaseContext.Provider>
    );
};

export const useTicketPurchase = () => useContext(TicketPurchaseContext);
