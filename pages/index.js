import React from "react";
import YourInfo from "@/components/your-info";

import StepForm from "@/components/step-form";

export default function Home() {
  return (
    <main className="multi-step">
      <div className="multi-step__form">
        <StepForm></StepForm>
        <div className="info-container">
          <YourInfo></YourInfo>
        </div>
      </div>
    </main>
  );
}
