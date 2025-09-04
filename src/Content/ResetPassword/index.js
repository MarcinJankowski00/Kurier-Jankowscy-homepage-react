import { useState } from "react";
import { Container, Form, Input, Message, PasswordRequirements, RequirementItem, SubmitButton } from "./styled";

const PasswordForm = ({ mode = "reset" }) => {
  const passwordRules = [
    { test: (pw) => pw.length >= 8, label: "Minimum 8 znaków" },
    { test: (pw) => /[A-Z]/.test(pw), label: "Jedna wielka litera" },
    { test: (pw) => /[a-z]/.test(pw), label: "Jedna mała litera" },
    { test: (pw) => /\d/.test(pw), label: "Jedna cyfra" },
  ];

  // mode: "reset" | "change"
  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  // reset -> pobierz token z URL
  const query = new URLSearchParams(window.location.search);
  const token = query.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setMessage("❌ Hasła się różnią!");
      return;
    }

    const isValid = passwordRules.every((rule) => rule.test(password));
    if (!isValid) {
      setMessage("❌ Hasło nie spełnia wymagań bezpieczeństwa");
      return;
    }

    try {
      let url = "";
      let body = {};
      let headers = { "Content-Type": "application/json" };

      if (mode === "reset") {
        url = "http://localhost:5000/api/auth/reset-password";
        body = { token, newPassword: password };
      } else if (mode === "change") {
        const authToken = localStorage.getItem("token");
        url = "http://localhost:5000/api/auth/change-password";
        body = { currentPassword: current, newPassword: password };
        headers.Authorization = `Bearer ${authToken}`;
      }

      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Hasło zostało zmienione.");
        setCurrent("");
        setPassword("");
        setConfirm("");
      } else {
        setMessage(data.error || "❌ Błąd przy zmianie hasła");
      }
    } catch (err) {
      setMessage("❌ Błąd sieci");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {mode === "change" && (
          <Input
            type="password"
            placeholder="Obecne hasło"
            value={current}
            required
            onChange={(e) => setCurrent(e.target.value)}
          />
        )}
        <Input
          type="password"
          placeholder="Nowe hasło"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {password && (
          <PasswordRequirements>
            {passwordRules.map((rule, i) => {
              return (
                <RequirementItem key={i} met={rule.test(password)}>
                  {rule.label}
                </RequirementItem>
              );
            })}
          </PasswordRequirements>
        )}
        <Input
          type="password"
          placeholder="Powtórz nowe hasło"
          value={confirm}
          required
          onChange={(e) => setConfirm(e.target.value)}
        />
        <SubmitButton type="submit">
          {mode === "reset" ? "Ustaw hasło" : "Zmień hasło"}
        </SubmitButton>
      </Form>
      <Message>{message}</Message>
    </Container>
  );
};

export default PasswordForm;

