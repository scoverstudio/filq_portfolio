import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {clientsPLReducer, clientsReducer} from "./clients";
import initialState from "./initialState";
import {usersReducer} from "./users";

const reducers = {
  clients: clientsReducer,
  users: usersReducer,
  clients_pl: clientsPLReducer,
};
const combinedReducers = combineReducers(reducers);

export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
