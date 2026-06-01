import React from "react";

import ReactDom from "react-dom/client";
import { BrowserRouter,Routes,Route,Link } from "react-router";
import Home from "./src/Home";
import Contact from "./src/Contact";
import Dashboard from "./src/Dashboard";
import Details from "./src/Details";
import Zero from "./src/Zero";
import Hello from "./src/Hello";
import Hi from "./src/Hi";
import Github from "./src/Github";

function App(){
  return(
<BrowserRouter>
<nav>
<Link to="/">Home</Link>
<Link to="/Contact">Contact</Link>
<Link to="/Dashboard">Dashboard</Link>
<Link to="/Details">Details</Link>


</nav>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Dashboard" element={<Dashboard/>}/>
<Route path="/Details" element={<Details/>}>
<Route index element={<Zero/>}/>
<Route path="Hello" element={<Hello/>}/>
<Route path="Hi" element={<Hi/>}/>
</Route>
<Route path="/Github/:name" element={<Github/>}/>
</Routes>
</BrowserRouter>
  )
}
const Reactroot=ReactDom.createRoot(document.getElementById("root"));
Reactroot.render(<App/>);