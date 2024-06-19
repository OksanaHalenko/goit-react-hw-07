import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
