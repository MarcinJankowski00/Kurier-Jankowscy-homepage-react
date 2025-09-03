import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  Form,
  Label,
  Input,
  Container,
  SubmitButton,
  FieldGroup,
} from "./styled";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
    invoiceType: "none",
    companyName: "",
    nip: "",
    companyStreet: "",
    companyHouseNumber: "",
    companyCity: "",
    companyPostalCode: "",
    companyEmail: "",
  });

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
        invoiceType: userData.invoiceType || "none",
        nip: userData.nip || "",
        companyName: userData.companyName || "",
        companyStreet: userData.companyStreet || "",
        companyHouseNumber: userData.companyHouseNumber || "",
        companyCity: userData.companyCity || "",
        companyPostalCode: userData.companyPostalCode || "",
        companyEmail: userData.companyEmail || "",
      });
    }
  }, [userData]);

  const validateForm = () => {
    const errors = [];

    const emailRegex = /^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^$|^[0-9]{9,}$/;
    const zipCodeRegex = /^$|^\d{2}-\d{3}$/;
    const nipRegex = /^$|^\d{10}$/;

    if (!phoneRegex.test(formData.contactNumber)) {
      errors.push("❌ Numer kontaktowy musi zawierać min. 9 cyfr.");
    }

    if (formData.invoiceType === "company") {
      if (!nipRegex.test(formData.nip)) {
        errors.push("❌ NIP musi mieć dokładnie 10 cyfr.");
      }

      if (!emailRegex.test(formData.companyEmail)) {
        errors.push("❌ Email jest niepoprawny.");
      }

      if (!zipCodeRegex.test(formData.companyPostalCode) || !zipCodeRegex.test(formData.zipCode)) {
        errors.push("❌ Kod pocztowy powinien mieć format XX-XXX.");
      }
    }

    return errors;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    const payload =
      formData.invoiceType === "company"
        ? formData
        : {
          ...formData,
          invoiceType: "none",
          companyName: "",
          nip: "",
          companyStreet: "",
          companyHouseNumber: "",
          companyCity: "",
          companyPostalCode: "",
          companyEmail: "",
        };

    try {
      const res = await fetch("http://localhost:5000/api/auth/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setUserData(data.user);
        alert("✅ Dane zostały zaktualizowane");
      } else {
        alert(data.error || "❌ Błąd aktualizacji");
      }
    } catch (err) {
      alert("❌ Błąd sieci");
    }
  };

  const baseFields = [
    { name: "name", label: "Imię", required: true },
    { name: "surname", label: "Nazwisko", required: true },
    { name: "street", label: "Ulica" },
    { name: "houseNumber", label: "Numer domu" },
    { name: "zipCode", label: "Kod pocztowy" },
    { name: "city", label: "Miasto" },
    { name: "contactNumber", label: "Numer kontaktowy" },
  ];

  const companyFields = [
    { name: "companyName", label: "Nazwa firmy" },
    { name: "nip", label: "NIP" },
    { name: "companyStreet", label: "Ulica" },
    { name: "companyHouseNumber", label: "Numer domu" },
    { name: "companyCity", label: "Miejscowość" },
    { name: "companyPostalCode", label: "Kod pocztowy" },
    { name: "companyEmail", label: "Email" },
  ];

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {baseFields.map(({ name, label, required }) => (
          <FieldGroup key={name}>
            <Label htmlFor={name}>{label}</Label>
            <Input
              id={name}
              name={name}
              type="text"
              value={formData[name]}
              onChange={handleChange}
              required={required}
            />
          </FieldGroup>
        ))}

        <FieldGroup>
          <Label>Potrzebujesz faktury?</Label>
          <div style={{ display: "flex", gap: "1rem" }}>
            <label>
              <input
                type="radio"
                name="invoiceType"
                value="none"
                checked={formData.invoiceType === "none"}
                onChange={handleChange}
              />
              Bez faktury
            </label>
            <label>
              <input
                type="radio"
                name="invoiceType"
                value="company"
                checked={formData.invoiceType === "company"}
                onChange={handleChange}
              />
              Dla firmy
            </label>
          </div>
        </FieldGroup>

        {formData.invoiceType === "company" &&
          companyFields.map(({ name, label }) => (
            <FieldGroup key={name}>
              <Label htmlFor={name}>{label}</Label>
              <Input
                id={name}
                name={name}
                type="text"
                value={formData[name]}
                onChange={handleChange}
              />
            </FieldGroup>
          ))}

        <SubmitButton type="submit">Zapisz zmiany</SubmitButton>
      </Form>
      <Link to="/change-password">
        <SubmitButton type="button">Zmień hasło</SubmitButton>
      </Link>
    </Container>
  );
};

export default MyData;
