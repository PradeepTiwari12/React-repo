import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import stores from './Stores';
import Counting from './Counting';
import {react1slicer} from "./Slicer1";
import CustomCounter from './CustomCounter';
function App(){
  console.log(react1slicer);
  console.log(stores);
  return(
    
    <Provider store={stores}>
    <Counting/>
    <br></br>
    <br></br>
    <br></br>
    <CustomCounter/>

    </Provider>
    
  )
}
const Reactroot=ReactDom.createRoot(document.getElementById("root"));
Reactroot.render(<App/>);