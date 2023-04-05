export const INITIAL_STATE = {
  personal_info: {
    full_name: "",
    email_address: "",
    phone_number: "",
  },
};

export const infoReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_PERSONAL_INFO": {
      return {
        ...state,
        personal_info: action.payload,
      };
    }
    default:
      return state;
  }
};
