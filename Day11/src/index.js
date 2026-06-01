import React from "react";
import ReactDom from "react-dom/client";
import Increment from "./Increment";
import Decrement from "./Dcrement";
function App(){
 const[count,setCount]=React.useState(0);
  return(
    <div>
      <h1>Counter checker</h1>
    <Increment counts={count} setCounts={setCount} />
    <Decrement counts={count} setCounts={setCount} />
    </div>
  )
}
const Reactroot=ReactDom.createRoot(document.getElementById("root"));
Reactroot.render(<App/>);