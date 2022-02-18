import { combineReducers } from "redux";
import { bodegaReducer } from "./bodegaReducer";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  bodega: bodegaReducer,
  auth: authReducer,
  ui: uiReducer,
});
