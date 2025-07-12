import { useState, useEffect } from "react";
import { Container, Form, Input, Message, SubmitButton, Title, ToggleButton } from "./styled";
import { useAuth } from "../context/AuthContext";

const AuthForm = ({ isModalOpen, onClose }) => {
  const {  login } = useAuth();

  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isRegister
      ? "http://localhost:5000/api/auth/register"
      : "http://localhost:5000/api/auth/login";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        if (isRegister) {
          setMessage("✅ Konto zostało utworzone. Możesz się teraz zalogować.");
        } else {
          login(data.token, email);
          setMessage(`✅ Zalogowano jako ${email}`);
          onClose && onClose();
        }
        setEmail("");
        setPassword("");
      } else {
        setMessage(data.message || "❌ Błąd logowania/rejestracji");
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
      <Title>{isRegister ? "Rejestracja" : "Logowanie"}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Hasło"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton type="submit">
          {isRegister ? "Zarejestruj się" : "Zaloguj się"}
        </SubmitButton>
      </Form>
      <Message>{message}</Message>
      <ToggleButton onClick={() => setIsRegister(!isRegister)}>
        {isRegister
          ? "Masz konto? Zaloguj się"
          : "Nie masz konta? Zarejestruj się"}
      </ToggleButton>
    </Container>
  );
};

export default AuthForm;

