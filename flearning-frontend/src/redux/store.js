import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import authenSlice from "./authenSlice";
import userSlice from "./userSlice";
import courseSlice from "./courseSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  authen: authenSlice.reducer,
  user: userSlice.reducer,
  course: courseSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };