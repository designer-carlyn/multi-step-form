import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import "@/styles/layout/index.scss";
import "@/styles/helpers/variables.scss";
import "@/styles/pages/home.scss";
import "@/styles/components/step-form.scss";
import "@/styles/components/card.scss";
import "@/styles/components/button.scss";
import "@/styles/components/your-info.scss";
import "@/styles/components/select-plan.scss";

import { StepContext } from "@/context/data";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [step, setStep] = useState(1);

  return (
    <StepContext.Provider value={[step, setStep]}>
      <Component {...pageProps} />
    </StepContext.Provider>
  );
}
