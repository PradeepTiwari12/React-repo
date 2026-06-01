import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

//{type:"coin/fetch/pending",payload:undefined}
//{type:"coin/fetch/fulfilled",payload:data}
//{type:"coin/fetch/rejected",payload:"error_message"}
const Fetchdata=createAsyncThunk(
  'Coin/fetch',
  async(args,thunkAPI)=>{
    try{
      const response=await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd &order=market_cap_desc&per_page=100&page=${args}`);
      const data=await response.json();
      return data;
    }
    catch(error){
      return thunkAPI.rejectWithValue('something went wrong')
    }

  }
)

const slicer1=createSlice({
  name:"coin",
  initialState:{
    data:{},loading:false,error:null},
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(Fetchdata.pending,(state)=>{
      state.loading=true;
      state.error=null;
    }).addCase(Fetchdata.fulfilled,(state,action)=>{
      state.loading=false;
      state.data=action.payload;
    }).addCase(Fetchdata.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.payload;
    })
  }
})

export default slicer1.reducer;
export {Fetchdata};
