import React from "react";
import ReactDom from "react-dom/client";

// const ele1=<h1>Hello world</h1>

// function greet(name){
//   return <h2> Ram Ram Bhaiya ji{name}</h2>
// }
// const ele=greet(" Pinku Sibu");
// const Reactroot=ReactDom.createRoot(document.getElementById('root'));
// Reactroot.render(ele);

/////////////////////////////////
//reault produuce hona chaiye:string,array,number
const arr=["Pinku","Sibu","Kumar",123,456];
function greet(arr){
  return <h2> Ram Ram Bhaiya ji{arr}</h2>
}

// const Reactroot1=ReactDom.createRoot(document.getElementById('root'));
// Reactroot1.render(greet(arr));

/////////////////////////////////
//props
function Greet(props){
  return <h1> Ram Ram Bhaiya ji {props.name} from {props.city}</h1>
}
const Reactroot2=ReactDom.createRoot(document.getElementById('root'));
Reactroot2.render(<Greet name="Pinku Sibu" city="Patna"/>);
