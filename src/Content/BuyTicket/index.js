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
import { TicketPurchaseProvider } from "../../context/TicketPurchaseContext";

const steps = [
  { title: 'Wybór biletu', component: TicketConfig },
  { title: 'Dane podróżującego', component: DataOfPassenger },
  { title: 'Podsumowanie', component: Summary },
  { title: 'Płatność', component: Payment },
];

const TicketPurchaseFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const StepComponent = steps[currentStep].component;

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <TicketPurchaseProvider>
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
    </TicketPurchaseProvider>
  );
};

export default TicketPurchaseFlow;
