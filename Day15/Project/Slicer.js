import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{count:0},
    reducers:{
      additems:(state)=>{state.count+=1},
      removeitems:(state)=>{state.count-=1}
    }
});
export const {additems, removeitems}=cartSlice.actions;
export default cartSlice.reducer;