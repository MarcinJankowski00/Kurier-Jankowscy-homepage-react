import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  Form,
  Label,
  Input,
  Container,
  Title,
  SubmitButton,
  Message,
  FieldGroup,
} from "./styled";

const MyData = () => {
  const { userData, setUserData } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    city: "",
    contactNumber: "",
  });
  const [message, setMessage] = useState("");

  const fieldLabels = {
    name: "Imię",
    surname: "Nazwisko",
    street: "Ulica",
    houseNumber: "Numer domu",
    zipCode: "Kod pocztowy",
    city: "Miasto",
    contactNumber: "Numer kontaktowy",
  };

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || "",
        surname: userData.surname || "",
        street: userData.street || "",
        houseNumber: userData.houseNumber || "",
        zipCode: userData.zipCode || "",
        city: userData.city || "",
        contactNumber: userData.contactNumber || "",
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setUserData(data.user);
        setMessage("✅ Dane zostały zaktualizowane");
      } else {
        setMessage(data.error || "❌ Błąd aktualizacji");
      }
    } catch (err) {
      setMessage("❌ Błąd sieci");
    }
  };

  return (
    <Container>
      <Title>Dane użytkownika</Title>
      <Form onSubmit={handleSubmit}>
        {Object.keys(fieldLabels).map((field) => (
          <FieldGroup key={field}>
            <Label htmlFor={field}>{fieldLabels[field]}</Label>
            <Input
              id={field}
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required={["name", "surname"].includes(field)}
            />
          </FieldGroup>
        ))}
        <SubmitButton type="submit">Zapisz zmiany</SubmitButton>
        <Message>{message}</Message>
      </Form>
    </Container>
  );
};

export default MyData;
