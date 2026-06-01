import React, { useEffect } from "react";
function Colorful(){
  const [color,setColor]=React.useState("black");
    console.log("first");
    useEffect(()=>{
      console.log("useEffect called");
      document.body.style.backgroundColor=color;
      
    },[color])
  console.log("second");
    return(
      <>
      <h1 >Background color Changer</h1>
      <div className="first">
        <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
        <button style={{backgroundColor:"green"}}
        onClick={()=>setColor("green")}>Green</button>
        <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
        <button style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
        <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
      </div>
      </>
    )
}
export default React.memo(Colorful);