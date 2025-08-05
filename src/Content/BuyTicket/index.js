import { useState } from 'react';
import {
  Wrapper,
  StepHeader,
  StepIndicator,
  StepTitle,
  StepContent,
  NavButtons,
  NavButton,
} from './styled';

import TicketConfig from './steps/TicketConfig';
import DataOfPassenger from './steps/DataOfPassenger';
import Summary from './steps/Summary';
import Payment from './steps/Payment';
import { useTicketPurchase } from "../../context/TicketPurchaseContext";

const steps = [
  { title: 'Wybór biletu', component: TicketConfig },
  { title: 'Dane podróżującego', component: DataOfPassenger },
  { title: 'Podsumowanie', component: Summary },
  { title: 'Płatność', component: Payment },
];

const TicketPurchaseFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const StepComponent = steps[currentStep].component;
  const { ticketData } = useTicketPurchase();
  const validateForm = () => {
    const errors = [];

    const emailRegex = /^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^$|^[0-9]{9,}$/;
    const zipCodeRegex = /^$|^\d{2}-\d{3}$/;
    const nipRegex = /^$|^\d{10}$/;
    if (!ticketData.name || ticketData.name.length < 2) {
      errors.push("Imię jest wymagane.");
    }
    if (!ticketData.surname || ticketData.surname.length < 2) {
      errors.push("Nazwisko jest wymagane.");
    }
    if (!ticketData.email || ticketData.email.length < 2) {
      errors.push("Email jest wymagany.");
    }

    if (!phoneRegex.test(ticketData.contactNumber)) {
      errors.push("❌ Numer kontaktowy musi zawierać min. 9 cyfr.");
    }
    if (!zipCodeRegex.test(ticketData.zipCode)) {
      errors.push("❌ Kod pocztowy powinien mieć format XX-XXX.");
    }
    if (!emailRegex.test(ticketData.email)) {
      errors.push("❌ Email jest niepoprawny.");
    }

    if (ticketData.invoiceType === "company") {
      if (!nipRegex.test(ticketData.nip)) {
        errors.push("❌ NIP musi mieć dokładnie 10 cyfr.");
      }

      if (!emailRegex.test(ticketData.companyEmail)) {
        errors.push("❌ Email jest niepoprawny.");
      }

      if (!zipCodeRegex.test(ticketData.companyPostalCode)) {
        errors.push("❌ Kod pocztowy powinien mieć format XX-XXX.");
      }
    }

    return errors;
  };

  const goNext = () => {
    const errors = validateForm();
    if (currentStep === 1 && errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const goBack = () => {
    const errors = validateForm();
    if (currentStep === 1 && errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <Wrapper>
      <StepHeader>
        {steps.map((step, index) => (
          <StepIndicator key={index} active={index === currentStep}>
            {index + 1}. {step.title}
          </StepIndicator>
        ))}
      </StepHeader>

      <StepTitle>{steps[currentStep].title}</StepTitle>

      <StepContent>
        <StepComponent />
      </StepContent>

      <NavButtons>
        <NavButton onClick={goBack} disabled={currentStep === 0}>
          ⬅ Wstecz
        </NavButton>
        <NavButton onClick={goNext} disabled={currentStep === steps.length - 1}>
          Dalej ➡
        </NavButton>
      </NavButtons>
    </Wrapper>
  );
};

export default TicketPurchaseFlow;
