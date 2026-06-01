import React from "react";
import ReactDom from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

function Gitprofile(){
  return(
    <>
    <Header/>
    <Body/>
   
    </>
  )
}
const reactroot=ReactDom.createRoot(document.getElementById('root'));
reactroot.render(<Gitprofile/>);