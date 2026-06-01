import React,{useState} from "react";
import ReactDom from "react-dom/client";

function Counter(){
  const [count,setCount]=useState(0);
  function incrementnumber(){
   
    setCount( count=>count+1);
    // document.querySelector("h1").innerText=`Count is:${count}`;
  }
  function decrementnumber(){
    setCount( count=>count-1);
    // document.querySelector("h1").innerText=`Count is:${count}`;
  }
  return(
<div className="first">
  <h1>Count is:{count}</h1>
  <button onClick={incrementnumber}>Increment </button>
  <button onClick={decrementnumber}>Decrement </button>
</div>
  )
}
const reactroot=ReactDom.createRoot(document.getElementById('root'));
reactroot.render(<Counter/>);