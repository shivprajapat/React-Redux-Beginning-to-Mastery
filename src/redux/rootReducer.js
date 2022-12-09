import { combineReducers } from "redux";
import changeCount from "./reducers";

const rootReducers = combineReducers({
  changeCount,
});

export default rootReducers;
