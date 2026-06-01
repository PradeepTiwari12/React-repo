import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Fetchdata } from "./slicer1";

export default function Coincreate(){
 const dispatch=useDispatch();
 const{data,loading,error}=useSelector((state)=>state.coin);

 useEffect(()=>{
  dispatch(Fetchdata(20));
 },[])
 if(loading){
  return <h1>Loading...</h1>
 }
  if(error){
    return <h1>{error}</h1>
  }
  return(
    <div style={{display:"flex",justifyContent:"center", flexDirection: "column",alignItems:"center"}}>
      {data.map((item)=>(
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} width="100px"/>
          <p>Current Price: ${item.current_price}</p>
        </div>
      ))}
    </div>
  )
}