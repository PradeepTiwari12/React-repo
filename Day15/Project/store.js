import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slicer";
const stores=configureStore({
    reducer:{
        cart:cartReducer
    }
});
export default stores;