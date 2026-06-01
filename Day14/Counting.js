import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,reset } from "./Slicer1";
export default function Counting(){
  const count = useSelector(state => state.slice1.count)
  const dispatch = useDispatch()
  return(
    <>
    <h1>Counting:</h1>
    <h2>{count}</h2>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(reset())}>Reset</button>
    </>
  )
}