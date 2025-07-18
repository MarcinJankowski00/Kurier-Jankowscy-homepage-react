import React, { useState } from 'react';
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

const DataOfPassenger = () => {
  const [invoiceType, setInvoiceType] = useState('none');

  const handleInvoiceChange = (e) => {
    setInvoiceType(e.target.value);
  };

  return (
    <FormWrapper>
      <Section>
        <Title>Podaj dane podróżującego</Title>
        <Label>Imię
          <Input type="text" name="travelerFirstName" />
        </Label>
        <Label>Nazwisko
          <Input type="text" name="travelerLastName" />
        </Label>
      </Section>

      <Section>
        <Title>Dane do wysyłki biletu</Title>
        <Label>Adres email (wyślemy na niego bilet)
          <Input type="email" name="email" />
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
              <Input type="text" name="privateFirstName" />
            </Label>
            <Label>Nazwisko
              <Input type="text" name="privateLastName" />
            </Label>
            <Label>Ulica
              <Input type="text" name="privateStreet" />
            </Label>
            <Label>Numer domu
              <Input type="text" name="privateHouseNumber" />
            </Label>
            <Label>Miejscowość
              <Input type="text" name="privateCity" />
            </Label>
            <Label>Kod pocztowy
              <Input type="text" name="privatePostalCode" />
            </Label>
            <Label>Email
              <Input type="email" name="privateEmail" />
            </Label>
          </ExtraFields>
        )}

        {invoiceType === 'company' && (
          <ExtraFields>
            <Label>Nazwa firmy lub imię i nazwisko
              <Input type="text" name="companyName" />
            </Label>
            <Label>NIP
              <Input type="text" name="nip" />
            </Label>
            <Label>Ulica
              <Input type="text" name="companyStreet" />
            </Label>
            <Label>Numer domu
              <Input type="text" name="companyHouseNumber" />
            </Label>
            <Label>Miejscowość
              <Input type="text" name="companyCity" />
            </Label>
            <Label>Kod pocztowy
              <Input type="text" name="companyPostalCode" />
            </Label>
            <Label>Email
              <Input type="email" name="companyEmail" />
            </Label>
          </ExtraFields>
        )}
      </Section>
    </FormWrapper>
  );
};

export default DataOfPassenger;
