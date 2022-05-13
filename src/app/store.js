import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import CartReducer from "../features/cartSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
//import { persistReducer } from "redux-persist";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const reducer = combineReducers({
//   cart: CartReducer,
// });

//const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default store;
