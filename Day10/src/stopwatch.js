import React,{useEffect, useMemo,useRef} from "react";
import ReactDom from "react-dom/client";
function App(){
const[time,setTime]=React.useState(0);
function reset(){
  setTime(0);
}
function start(){
  setInterval(() => {
    setTime(prevTime => prevTime + 1);
  }, 1000);
}
function stop(){
  clearInterval(start);
}
  
   return(
    <>
    <h1> stopwatch time is:{time}</h1>
    <button onClick={reset}>Reset</button>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>


    </>
   )
}
const Reactroot=ReactDom.createRoot(document.getElementById("root"));
Reactroot.render(<App/>);