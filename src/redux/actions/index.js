import { DECEREMENT, INCREMENT } from "../constants";

export const setIncrement = (num, data) => {
  return {
    type: INCREMENT,
    payload: { num, data },
  };
};
export const increment = (num,count) => {
  return async (dispatch) => {
    const data = await fetch(`https://fakestoreapi.com/products/${count}`)
      .then((res) => res.json())
      .then((json) => json);
    dispatch(setIncrement(num, data));
  };
};

export const setDecrement = (num, data) => {
  return {
    type: DECEREMENT,
    payload: { num, data },
  };
};

export const decrement = (num,count) => {
  return async (dispatch) => {
    const data = await fetch(`https://fakestoreapi.com/products/${count}`)
      .then((res) => res.json())
      .then((json) =>json);
    dispatch(setDecrement(num, data));
  };
};