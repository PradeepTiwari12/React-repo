import {configureStore} from '@reduxjs/toolkit';
import slicer1Reducer from './slicer1';

const store=configureStore({
  reducer:{
    coin:slicer1Reducer
  }
})
export default store;