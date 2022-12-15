import { DECEREMENT, INCREMENT } from "../constants";

const initialState = [0, ""];

const changeCount = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(action.payload["data"].title)
      return [state[0]+action.payload["num"],action.payload["data"].title];
    case DECEREMENT:
      return [state[0]-action.payload["num"],action.payload["data"].title];
    default:
      return state;
  }
};

export default changeCount;
