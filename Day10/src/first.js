import React,{useEffect, useMemo,useRef} from "react";
import ReactDom from "react-dom/client";
function App(){
  const[count,setCount]=React.useState(0);
  const money=useRef(0);
  
   return(
    <>
    <h1> counter is:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Incremment</button>
    <h1>Money is:{money.current}</h1>
    <button onClick={()=>(money.current=money.current+1)}>Add Money</button>


    </>
   )
}
const Reactroot=ReactDom.createRoot(document.getElementById("root"));
Reactroot.render(<App/>);