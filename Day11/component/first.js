import React from "react";
import ReactDom from "react-dom/client";
import Second from "./second";
import GlobalContext from "./global";
import { useContext } from "react";


function App(){
 const[count,setCount]=React.useState(90);
  return(
    <div>
      <GlobalContext.Provider value={{counts:count,setCounts:setCount}}>
        <h1>Counter checker</h1>
        <Second counts={count} setCounts={setCount}></Second>
      </GlobalContext.Provider>
 </div>
  )
}
const Reactroot=ReactDom.createRoot(document.getElementById("root"));
Reactroot.render(<App/>);