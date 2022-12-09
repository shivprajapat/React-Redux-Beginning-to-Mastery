import { DECEREMENT, INCREMENT } from "../constants";

const initialState = 0;

const changeCount = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECEREMENT:
      return state - action.payload;
    default:
      return state;
  }
};

export default changeCount;
