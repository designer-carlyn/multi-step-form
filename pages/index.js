import React from "react";

import StepForm from "@/components/step-form";

export default function Home() {
  return (
    <main className="multi-step">
      <div className="multi-step__form">
        <StepForm></StepForm>
        <div className="info-container"></div>
      </div>
    </main>
  );
}
