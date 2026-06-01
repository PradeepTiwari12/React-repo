import { configureStore } from "@reduxjs/toolkit";
import react1Reducer from "./Slicer1";
const stores = configureStore({
  reducer: {
    slice1: react1Reducer,
   
  }})
  export default stores;