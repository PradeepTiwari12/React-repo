 import { useSelector } from "react-redux"
 export default function Header(){
  const count=useSelector((state)=>state.cart.count);
  return(
    <div style={{backgroundColor:"lightblue", padding:"10px"}}>
    <h1>Swiggy</h1>
    <h2> Cart:{count}</h2>
    </div>
  )
}