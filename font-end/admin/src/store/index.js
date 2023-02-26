import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
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
});

const syncConfig = {
  blacklist: ["persist/PERSIST"],
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, createStateSyncMiddleware(syncConfig)],
});

initMessageListener(store);

export default store;
export const persistor = persistStore(store);
