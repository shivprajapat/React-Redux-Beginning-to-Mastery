import { DECEREMENT, INCREMENT } from "../constants";

export const increment = () => {
  return { type: INCREMENT };
};
export const decrement = () => {
  return { type: DECEREMENT };
};
