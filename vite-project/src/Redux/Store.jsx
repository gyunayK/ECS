import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { rootReducer } from "./Slice/index";

import logger from "redux-logger";
import thunk from "redux-thunk";

let middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
};

if (process.env.NODE_ENV === "development") middleware.push(logger);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

const persistor = persistStore(store);

const AppProvider = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{children}</PersistGate>
  </Provider>
);

export default AppProvider;
