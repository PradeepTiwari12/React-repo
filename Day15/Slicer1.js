import{createSlice} from '@reduxjs/toolkit';

//Immersive way of writing reducers using createSlice from Redux Toolkit. It allows us to write "mutating" logic in reducers, which is actually not mutating the state but using Immer library under the hood to handle immutability. This makes the code more concise and easier to read compared to traditional Redux reducers where we have to return new state objects.
//Immer allows us to write code that looks like it's mutating the state directly, but it actually creates a new state object behind the scenes. This is why we can use the += and -= operators in our reducers without worrying about mutating the state directly. It simplifies the process of updating state and reduces boilerplate code, making it easier to manage complex state logic in Redux applications.
const react1slicer=createSlice({
  name:"slice1",
  initialState:{count:0},
  reducers:{
    increment:(state)=>{ state.count += 1},
    decrement:(state)=>{state.count -= 1},
    reset:(state)=>{state.count = 0},
    customIncreaser:(state,actions)=>{state.count+=actions.payload}
  }
})
export const {increment,decrement,reset,customIncreaser}=react1slicer.actions;
export {react1slicer};
export default react1slicer.reducer;

//increment:(state)=>{return{...state,count:state.count+1}}