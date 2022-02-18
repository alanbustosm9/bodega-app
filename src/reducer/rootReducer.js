import { combineReducers } from "redux";
import { bodegaReducer } from "./bodegaReducer";

export const rootReducer = combineReducers({
  bodegaReducer,
});
