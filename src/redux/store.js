import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { clientsReducer } from "./clients";
import initialState from "./initialState";

const reducers = {
  clients: clientsReducer,
};
const combinedReducers = combineReducers(reducers);

export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
