import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { clientsReducer, clientsPLReducer } from "./clients";
import initialState from "./initialState";

const reducers = {
  clients: clientsReducer,
  clients_pl: clientsPLReducer,
};
const combinedReducers = combineReducers(reducers);

export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
