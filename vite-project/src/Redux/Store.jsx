import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { rootReducer } from "./Slice/index";
import thunk from "redux-thunk";
import logger from "redux-logger";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const middleware = [thunk];


const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

const persistor = persistStore(store);

const AppProvider = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default AppProvider;
