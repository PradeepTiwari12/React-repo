import React from 'react';
import { useDispatch } from 'react-redux';
import {additems, removeitems} from "./Slicer";
export default function  Foodcart({value}){
  const[incart, setIncart]=React.useState(false);
  const dispatch=useDispatch();
  function handleClick(){
    if(incart){
      dispatch(removeitems());
      setIncart(false);
    }
    else{
      dispatch(additems());
      setIncart(true);
    }
  }
  return(
<>
         
        <button onClick={handleClick}>{incart?"remove":"Add"}</button>
</>
  )
}