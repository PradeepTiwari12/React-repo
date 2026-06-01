import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

 function App(){
  return(
<>
<div>
  <div>
    <img></img>
  </div>
  <div>
    <h1>Biography</h1>
  </div>
  <div>
    <p>lorem45</p>
  </div>
</div>
</>
  )
 }
 const reactroot=ReactDOM.createRoot(document.getElementById("root"));
 reactroot.render(<App/>)