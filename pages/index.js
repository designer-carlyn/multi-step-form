import React, { useContext } from "react";
import { StepContext } from "@/context/data";

import YourInfo from "@/components/your-info";
import SelectPlan from "@/components/select-plan";
import AddOns from "@/components/add-ons";

import StepForm from "@/components/step-form";

export default function Home() {
  const [step, setStep] = useContext(StepContext);

  return (
    <main className="multi-step">
      <div className="multi-step__form">
        <StepForm></StepForm>
        <div className="info-container">
          {step === 1 ? <YourInfo></YourInfo> : null}
          {step === 2 ? <SelectPlan></SelectPlan> : null}
          {step === 3 ? <AddOns></AddOns> : null}
        </div>
      </div>
    </main>
  );
}
