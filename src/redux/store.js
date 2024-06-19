import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";

const persistConfig = {
  key: "savedContacts",
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
