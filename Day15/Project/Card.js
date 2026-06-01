import Foodcart from './Foodcart';
const foodItems=[
  {id:1, name:"Pizza", price:200},
  {id:2, name:"Burger", price:100},
  {id:3, name:"Pasta", price:150},
  {id:4, name:"Fries", price:50},
  {id:5, name:"Coke", price:30},
  {id:6, name:"Ice Cream", price:80},
  {id:7, name:"Sandwich", price:120},
  {id:8, name:"Salad", price:90},
  {id:9, name:"Samosa", price:20},
  {id:10, name:"Dosa", price:70},
  {id:11, name:"Idli", price:40},
  {id:12, name:"Vada", price:60},
  {id:13, name:"Paratha", price:110},
  {id:14, name:"Chole Bhature", price:130},
  {id:15, name:"Paneer Butter Masala", price:180},
  {id:16, name:"Chicken Curry", price:220},
  {id:17, name:"Mutton Biryani", price:250},
  {id:18, name:"Fish Fry", price:200},
  {id:19, name:"Egg Curry", price:90},
  {id:20, name:"Veg Biryani", price:160}

];
 export default function Card(){

  
  return(
 <div style={{display:"flex", flexWrap:"wrap", gap:"20px", padding:"20px", justifyContent:"center"}}>
  {foodItems.map((item)=>{
    return(
      <div key={item.id} style={{border:"1px solid black", padding:"10px", width:"150px", textAlign:"center"}}>
         <h1>{item.name}</h1>
        <h2>Price: ₹{item.price}</h2>
    <Foodcart value={item}></Foodcart>
      </div>
     
    )
  })}
  </div>
  )
}