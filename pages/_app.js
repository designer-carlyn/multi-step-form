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

import { StepContext, PersonalInfoContext } from "@/context/data";
import { INITIAL_STATE, infoReducer } from "@/reducer/info-reducer";
import { useState, useReducer } from "react";

export default function App({ Component, pageProps }) {
  const [step, setStep] = useState(2);
  const [state, dispatch] = useReducer(infoReducer, INITIAL_STATE);

  return (
    <StepContext.Provider value={[step, setStep]}>
      <PersonalInfoContext.Provider value={[state, dispatch]}>
        <Component {...pageProps} />
      </PersonalInfoContext.Provider>
    </StepContext.Provider>
  );
}
