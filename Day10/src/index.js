import React,{useEffect, useMemo} from "react";
import ReactDom from "react-dom/client";
function App(){
  const[count,setCount]=React.useState(0);
  const[number,setNumber]=React.useState(0);
  // const[result,setResult]=React.useState(0);
  
  function fibo(n){
    if(n==0||n==1) return n;
    else return fibo(n-1)+fibo(n-2);
  }
const result=useMemo(()=>fibo(number),[number]);

// useEffect(()=>{
//   setResult(fibo(number));
// },[number]);
   return(
    <>
    <h1> counter is:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Incremment</button>
    <button onClick={()=>setCount(count-1)}>Decremment</button>
    <div className="fibo">
      <h2>Fibbonnaci number is:{result}</h2>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
    </div>
    </>
   )
}
const Reactroot=ReactDom.createRoot(document.getElementById("root"));
Reactroot.render(<App/>);