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

import {
  StepContext,
  PersonalInfoContext,
  OptionBillingContext,
  SelectPlanContext,
} from "@/context/data";
import { INITIAL_STATE, infoReducer } from "@/reducer/info-reducer";
import { useState, useReducer } from "react";

export default function App({ Component, pageProps }) {
  const [step, setStep] = useState(1);
  const [state, dispatch] = useReducer(infoReducer, INITIAL_STATE);
  const [toggleBilling, setToggleBilling] = useState(false);
  const [choosePlan, setChoosePlan] = useState(9);

  return (
    <StepContext.Provider value={[step, setStep]}>
      <PersonalInfoContext.Provider value={[state, dispatch]}>
        <OptionBillingContext.Provider
          value={[toggleBilling, setToggleBilling]}
        >
          <SelectPlanContext.Provider value={[choosePlan, setChoosePlan]}>
            <Component {...pageProps} />
          </SelectPlanContext.Provider>
        </OptionBillingContext.Provider>
      </PersonalInfoContext.Provider>
    </StepContext.Provider>
  );
}
