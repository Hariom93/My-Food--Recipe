import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/CartSlice";
import CategorySlice from "./slice/CategorySlice";
import SearchSlice from "./slice/SearchSlice";

export const store = configureStore({
    reducer:{
    Cart:CartSlice,
    category:CategorySlice,
    search:SearchSlice,
    }
});