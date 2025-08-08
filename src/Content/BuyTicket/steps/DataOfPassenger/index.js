import React from 'react';
import {
  FormWrapper,
  Section,
  Label,
  Input,
  Title,
  CheckboxWrapper,
  RadioLabel,
  ExtraFields,
} from './styled';
import { useTicketPurchase } from "../../../../context/TicketPurchaseContext";

const DataOfPassenger = () => {
  const { ticketData, updateTicketData } = useTicketPurchase();

  const invoiceType = ticketData.invoiceType || "none";
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateTicketData({ [name]: value });
  };

  const handleInvoiceChange = (e) => {
    updateTicketData({ invoiceType: e.target.value });
  };

  return (
    <FormWrapper>
      <Section>
        <Title>Podaj dane podróżującego</Title>
        <Label>Imię
          <Input
            type="text"
            name="name"
            value={ticketData.name || ""}
            onChange={handleInputChange}
          />
        </Label>
        <Label>Nazwisko
          <Input
            type="text"
            name="surname"
            value={ticketData.surname || ""}
            onChange={handleInputChange}
          />
        </Label>
      </Section>

      <Section>
        <Title>Dane do wysyłki biletu</Title>
        <Label>Adres email (wyślemy na niego bilet)
          <Input
            type="email"
            name="email"
            value={ticketData.email || ""}
            onChange={handleInputChange}
          />
        </Label>
      </Section>

      <Section>
        <Title>Potrzebujesz faktury?</Title>
        <p>
          <strong>UWAGA!</strong> Jeśli kupujesz bilet na firmę niezbędne jest podanie numeru NIP firmy na tym etapie procesu transakcyjnego. Jeśli nie uzupełnisz teraz tych danych, nie będziemy mieli możliwości wystawienia faktury na firmę.
        </p>

        <CheckboxWrapper>
          <RadioLabel>
            <input
              type="radio"
              name="invoice"
              value="none"
              checked={invoiceType === 'none'}
              onChange={handleInvoiceChange}
            />
            Bez faktury
          </RadioLabel>

          <RadioLabel>
            <input
              type="radio"
              name="invoice"
              value="private"
              checked={invoiceType === 'private'}
              onChange={handleInvoiceChange}
            />
            Dla osoby prywatnej
          </RadioLabel>

          <RadioLabel>
            <input
              type="radio"
              name="invoice"
              value="company"
              checked={invoiceType === 'company'}
              onChange={handleInvoiceChange}
            />
            Dla firmy
          </RadioLabel>
        </CheckboxWrapper>

        {invoiceType === 'private' && (
          <ExtraFields>
            <Label>Imię
              <Input
                type="text"
                name="invoiceName"
                value={ticketData.invoiceName || ""}
                onChange={handleInputChange}
              />
            </Label>
            <Label>Nazwisko
              <Input
                type="text"
                name="invoiceSurname"
                value={ticketData.invoiceSurname || ""}
                onChange={handleInputChange}
              />
            </Label>
            <Label>Ulica
              <Input
                type="text"
                name="street"
                value={ticketData.street || ""}
                onChange={handleInputChange}
              />
            </Label>
            <Label>Numer domu
              <Input
                type="text"
                name="houseNumber"
                value={ticketData.houseNumber || ""}
                onChange={handleInputChange}
              />
            </Label>
            <Label>Miejscowość
              <Input
                type="text"
                name="city"
                value={ticketData.city || ""}
                onChange={handleInputChange}
              />
            </Label>
            <Label>Kod pocztowy
              <Input
                type="text"
                name="zipCode"
                value={ticketData.zipCode || ""}
                onChange={handleInputChange}
              />
            </Label>
            <Label>Email
              <Input
                type="email"
                name="invoiceEmail"
                value={ticketData.invoiceEmail || ""}
                onChange={handleInputChange}
              />
            </Label>
          </ExtraFields>
        )}

        {invoiceType === 'company' && (
          <ExtraFields>
            <Label>Nazwa firmy lub imię i nazwisko
              <Input
                type="text"
                name="companyName"
                value={ticketData.companyName || ""}
                onChange={handleInputChange}
              />
            </Label>
            <Label>NIP
              <Input
                type="text"
                name="nip"
                value={ticketData.nip || ""}
                onChange={handleInputChange}
              />
            </Label>
            <Label>Ulica
              <Input
                type="text"
                name="companyStreet"
                value={ticketData.companyStreet || ""}
                onChange={handleInputChange}
              />
            </Label>
            <Label>Numer domu
              <Input
                type="text"
                name="companyHouseNumber"
                value={ticketData.companyHouseNumber || ""}
                onChange={handleInputChange}
              />
            </Label>
            <Label>Miejscowość
              <Input
                type="text"
                name="companyCity"
                value={ticketData.companyCity || ""}
                onChange={handleInputChange}
              />
            </Label>
            <Label>Kod pocztowy
              <Input
                type="text"
                name="companyPostalCode"
                value={ticketData.companyPostalCode || ""}
                onChange={handleInputChange}
              />
            </Label>
            <Label>Email
              <Input
                type="email"
                name="companyEmail"
                value={ticketData.companyEmail || ""}
                onChange={handleInputChange}
              />
            </Label>
          </ExtraFields>
        )}
      </Section>
    </FormWrapper>
  );
};

export default DataOfPassenger;
