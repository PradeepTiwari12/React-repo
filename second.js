// import React from 'react';
// import ReactDOM from 'react-dom/client';

const element=React.createElement("h2",{id:"pinku",className:"sibu",style:{color:"green",textAlign:"center"}},"This is second file");

const element2=React.createElement("h3",{id:"third",className:"third",style:{color:"blue",textAlign:"center"}}, "This is third file");

const para=React.createElement("p",{style:{color:"red"}},"This is paragraph.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
const container=React.createElement("div",{},[element,element2,para]);
// ReactDOM.render(element,document.getElementById('root'));
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(element2);
Reactroot.render(container);