

// //create element through js
// const header1=document.createElement("h1");
// header1.innerText="Hello World from JS";
// header1.style.color="blue";
// header1.style.textAlign="center";
// header1.style.backgroundColor="yellow";

// const root=document.getElementById('root');
// root.append(header1);

// //React:object,ReactDOM:object
//createElement:function,render:function


// const React={
//   createElement:function(tag,style,children){
//     const element=document.createElement(tag);
//     if(typeof children==="object"){
//       for(let child of children){
//         element.append(child);
//       }
//     }
//     else{
//     element.innerText=children;
//       }
//     for(let key in style){
//       element.style[key]=style[key];
//     }
//     return element;

//   }
// }
// const ReactDOM={
//   render:function(element,root){
//     root.append(element);
//   }
// }
// const li1=React.createElement("li",{}, "India");
// const li2=React.createElement("li",{}, "USA");
// const li3=React.createElement("li",{}, "UK");

// const header2=React.createElement("h1",{fontsize:"30px",backgroundColor:"yellow",color:"blue",textAlign:"center"},"Hello World from React");
// const ul=React.createElement("ul",{backgroundColor:"lightgrey"},[
//   li1,li2,li3]);


// const root2=document.getElementById('root');
// root2.append(header2);

// // ReactDOM.render(header2,document.getElementById('root'));
// ReactDOM.render(ul,document.getElementById('root'));


////////////////////////////////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom/client';

const element=React.createElement("h2",{id:"pinku",className:"sibu",style:{color:"green",textAlign:"center"}},"This is second file");

const element2=React.createElement("h3",{id:"third",className:"third",style:{color:"blue",textAlign:"center"}}, "This is third file");
const para=React.createElement("p",{style:{color:"red"}},"This is paragraph.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
const container=React.createElement("div",{},[element,element2,para]);
// ReactDOM.render(element,document.getElementById('root'));
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(element);
Reactroot.render(container);