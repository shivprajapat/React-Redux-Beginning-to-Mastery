import { DECEREMENT, INCREMENT } from "../constants";

export const increment = (num) => {
  return { type: INCREMENT, payload: num };
};
export const decrement = (num) => {
  return { type: DECEREMENT, payload: num };
};
