import { combineReducers } from "redux";
import { bodegaReducer } from "./bodegaReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  bodega: bodegaReducer,
  auth: authReducer,
});
