import{useState} from 'react';
import { useDispatch } from 'react-redux';
import { increment,decrement,customIncreaser } from './Slicer1';
export default function CustomCounter(){
  const[number,setNumber]=useState(0);
  const dispatch=useDispatch();
  function HandleClick(){
      dispatch(customIncreaser(Number(number)));
      setNumber(0);
  }
    return(
        <>
     <input type="number" placeholder="Enter a number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
     <button onClick={(HandleClick)} >Submit</button>
        </>
    )
}