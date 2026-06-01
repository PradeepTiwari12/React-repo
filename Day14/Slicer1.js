import{createSlice} from '@reduxjs/toolkit';
const react1slicer=createSlice({
  name:"slice1",
  initialState:{count:0},
  reducers:{
    increment:(state)=>{ state.count += 1},
    decrement:(state)=>{state.count -= 1},
    reset:(state)=>{state.count = 0}
  }
})
export const {increment,decrement,reset}=react1slicer.actions;
export default react1slicer.reducer;