import { legacy_createStore as createStore} from 'redux'
import rootReducers from "./redux/rootReducer";

const store = createStore(rootReducers)
export default store;