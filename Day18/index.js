import React from 'react';
import ReactDOM from 'react-dom/client';

import Add from './Add'
function App(){
  const[language,setlanguage]=React.useState(['TS','JS','Java'])
  function handleClick(){
    setlanguage(["C++",...language]);
  }
  return(
    <>
    <div style={{display:"flex",justifyContent:"center",gap:"20px",marginTop:"50px"}}>
      {

     language.map((value,index)=><Add key={value} value={value}></Add>)
      }
    </div>
<button onClick={(handleClick)}>Add Language</button>
    </>
  )
}
const Reactroot=ReactDOM.createRoot(document.getElementById("root"))
Reactroot.render(<App/>)