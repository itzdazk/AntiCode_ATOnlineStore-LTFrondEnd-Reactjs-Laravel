import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import cartReducer, { getTotals } from "./reducers/cart";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

const authPersistConfig = { key: "auth", storage };
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  cart: cartReducer,
});

const syncConfig = {
  blacklist: ["persist/PERSIST"],
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, createStateSyncMiddleware(syncConfig)],
});

store.dispatch(getTotals());

initMessageListener(store);

export default store;
export const persistor = persistStore(store);
