import { configureStore } from "@reduxjs/toolkit";
import paginatePageSlice from "./paginateSlice";

const store = configureStore({
    reducer : paginatePageSlice.reducer
})

export default store ;