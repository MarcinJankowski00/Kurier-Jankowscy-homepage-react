import { useState, useEffect, useRef } from "react";
import { Container, Form, Input, Message, PasswordRequirements, RequirementItem, SubmitButton, Title, ToggleButton } from "./styled";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const passwordRules = [
  { test: (pw) => pw.length >= 8, label: "Minimum 8 znaków" },
  { test: (pw) => /[A-Z]/.test(pw), label: "Jedna wielka litera" },
  { test: (pw) => /[a-z]/.test(pw), label: "Jedna mała litera" },
  { test: (pw) => /\d/.test(pw), label: "Jedna cyfra" },
];

const AuthForm = ({ isModalOpen, onClose }) => {
  const { login } = useAuth();
  const history = useHistory();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, [mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "register") {
      const isValid = passwordRules.every((rule) => rule.test(password));
      if (!isValid) {
        setMessage("❌ Hasło nie spełnia wymagań bezpieczeństwa");
        return;
      }
    }

    let url = "";
    let body = {};

    if (mode === "register") {
      url = "http://localhost:5000/api/auth/register";
      body = { email, password };
    } else if (mode === "login") {
      url = "http://localhost:5000/api/auth/login";
      body = { email, password };
    } else if (mode === "forgot") {
      url = "http://localhost:5000/api/auth/forgot-password";
      body = { email };
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok) {
        if (mode === "register") {
          setMessage("✅ Konto zostało utworzone. Możesz się teraz zalogować.");
          setMode("login");
        } else if (mode === "login") {
          login(data.token, email);
          setMessage(`✅ Zalogowano jako ${email}`);
          onClose && onClose();
          history.push("/");
        } else if (mode === "forgot") {
          setMessage("📧 Jeśli podany adres istnieje, wysłaliśmy link resetu hasła.");
          setMode("login");
        }
        setEmail("");
        setPassword("");
      } else {
        setMessage(data.message || data.error || "❌ Coś poszło nie tak");
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
      <Title>
        {mode === "register"
          ? "Rejestracja"
          : mode === "forgot"
            ? "Reset hasła"
            : "Logowanie"}
      </Title>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          ref={emailRef}
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        {mode !== "forgot" && (
          <Input
            type="password"
            placeholder="Hasło"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
        {mode === "register" && password && (
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

        <SubmitButton type="submit">
          {mode === "register"
            ? "Zarejestruj się"
            : mode === "forgot"
              ? "Wyślij link"
              : "Zaloguj się"}
        </SubmitButton>
      </Form>

      <Message>{message}</Message>

      {mode === "login" && (
        <>
          <ToggleButton onClick={() => setMode("register")}>
            Nie masz konta? Zarejestruj się
          </ToggleButton>
          <ToggleButton onClick={() => setMode("forgot")}>
            Zapomniałeś hasła?
          </ToggleButton>
        </>
      )}

      {mode === "register" && (
        <ToggleButton onClick={() => setMode("login")}>
          Masz konto? Zaloguj się
        </ToggleButton>
      )}

      {mode === "forgot" && (
        <ToggleButton onClick={() => setMode("login")}>
          Wróć do logowania
        </ToggleButton>
      )}
    </Container>
  );
};

export default AuthForm;




