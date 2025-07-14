import { useState, useEffect } from "react";
import { Container, Form, Message, SubmitButton } from "./styled";
import { useAuth } from "../context/AuthContext";

const DeleteAccount = ({ isModalOpen, onClose }) => {
    const { isLoggedIn, userEmail, logout } = useAuth();
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = "http://localhost:5000/api/auth/delete"

        try {
            const res = await fetch(url, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const data = await res.json();

            if (res.ok) {
                setMessage("✅ Konto zostało usunięte");
                logout();
            } else {
                setMessage(data.message || "Błąd");
            }
        } catch (err) {
            setMessage("❌ Błąd sieci");
        }
    };

    useEffect(() => {
        if (!isModalOpen) {
            setMessage("");
        }
    }, [isModalOpen]);

    return (
        <Container>
            {isLoggedIn ?
                <>
                    <Form onSubmit={handleSubmit}>
                        Czy napewno chcesz usunąć konto: {userEmail}
                        <SubmitButton type="submit">
                            Usuń konto
                        </SubmitButton>
                    </Form>
                </> : ""
            }
            <Message>{message}</Message>
        </Container>
    );
};

export default DeleteAccount;

