import React,{useEffect} from "react";
import ReactDom from "react-dom/client";
import Colorful from "./component/colorful";
function Main(){
  const [count,setCount]=React.useState(0);
return(
  <>
  <div style={{display:"flex",gap:"10px",justifyContent:"center",margin:"20px",alignItems:"center"}}>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)} style={{backgroundColor:"white",padding:"20px",borderRadius:"10px",color:"black",width:"100px",fontSize:"16px"}}>Increment</button>
  </div>
   <Colorful/>
  </>
 
)
  
}
const reactroot=ReactDom.createRoot(document.getElementById('root'));
reactroot.render(<Main/>);