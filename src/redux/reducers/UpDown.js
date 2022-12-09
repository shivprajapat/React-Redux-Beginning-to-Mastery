import { DECEREMENT, INCREMENT } from "../constants";

const initialState = 0;

const changeCount = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECEREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default changeCount;
