import { configureStore } from "@reduxjs/toolkit";
import user_slice from "./user_slice";

const store = configureStore({reducer: user_slice})

export default store