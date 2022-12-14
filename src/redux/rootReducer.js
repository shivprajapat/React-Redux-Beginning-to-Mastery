import { combineReducers } from "redux";
import changeCount from "./reducers";
import {lang} from "./reducers/reducer";

const rootReducers = combineReducers({
  changeCount,
  lang
});

export default rootReducers;
