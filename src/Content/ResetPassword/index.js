import { useState } from "react";
import { Container, Form, Input, Message, SubmitButton } from "./styled";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  // Pobranie tokena i emaila z query string
  const query = new URLSearchParams(window.location.search);
  const token = query.get("token");
  const email = query.get("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setMessage("❌ Hasła się różnią!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token, newPassword: password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Hasło zostało zmienione. Możesz się teraz zalogować.");
        setPassword("");
        setConfirm("");
      } else {
        setMessage(data.error || "❌ Błąd przy resetowaniu hasła");
      }
    } catch (err) {
      setMessage("❌ Błąd sieci");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="Nowe hasło"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Powtórz hasło"
          value={confirm}
          required
          onChange={(e) => setConfirm(e.target.value)}
        />
        <SubmitButton type="submit">Zmień hasło</SubmitButton>
      </Form>
      <Message>{message}</Message>
    </Container>
  );
};

export default ResetPassword;
