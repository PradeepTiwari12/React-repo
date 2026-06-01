import React from "react";
import ReactDom from "react-dom/client";
import Card from "./component/card";
import Header from "./component/header";
import Footer from "./component/footer";
import arr from "./utils/dummy";







function App(){
  const [A,setA]=React.useState(arr);
function sortByPrice() {
  const sortedArr = [...A].sort((a, b) => a.price - b.price);
  setA(sortedArr);
}
function priceaboove699(){
  const filteredArr = A.filter(item => item.price > 699);
  setA(filteredArr);
}

  return(
    <div >
     {/* <Card img="https://tse1.explicit.bing.net/th/id/OIP.uOe9h7DTNNvQCSbc9BfauwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" cloth="Red Printed T-shirt" offer="40-70 off"/>
      <Card img="https://tse2.mm.bing.net/th/id/OIP.PeMuLPstXagGZILP0miATQHaLz?rs=1&pid=ImgDetMain&o=7&rm=3" cloth="Blue Jeans" offer="30-60 off"/>
      <Card img="https://tse3.mm.bing.net/th/id/OIP.9QnueAc8VTnGcUh3iH9KSgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" cloth="Black Hoodie" offer="50-80 off"/>
      <Card img="https://tse1.mm.bing.net/th/id/OIP.3QrBTTrrYow2mMTY0hfBQgAAAA?w=450&h=600&rs=1&pid=ImgDetMain&o=7&rm=3" cloth="White Sneakers" offer="20-50 off"/>
      <Card img="https://tse4.mm.bing.net/th/id/OIP._-xZkuwkWtQljcBxSZ8qYgHaL1?rs=1&pid=ImgDetMain&o=7&rm=3"cloth="Green Jacket" offer="60-90 off"/>
      <Card  img="https://i.pinimg.com/originals/12/6f/1e/126f1e478e6b079063574d2c21214db6.jpg"cloth="Yellow Dress" offer="10-40 off"/>
       <Card img="https://img.freepik.com/premium-photo/neon-confidence-indian-model-striking-pink-dress-epitomizing-bold-selfexpression-lifestyl_878783-13545.jpg"cloth="Pink Top" offer="25-55 off"/>
      <Card img="https://cdn-img.prettylittlething.com/0/2/6/0/026024c10754b566598315f4633382b370f3ff5f_cne8706_1.jpg" cloth="Orange Shorts" offer="15-45 off"/>     */}
 
    
      <>
      <Header/>
    
      <button style={{margin:"10px",padding:"10px",backgroundColor:"blue",color:"white",border:"none",borderRadius:"5px"}} onClick={sortByPrice}>Sort by Price</button>
      
      <button style={{margin:"10px",padding:"10px",backgroundColor:"green",color:"white",border:"none",borderRadius:"5px"}} onClick={priceaboove699}>filter</button>

      

  <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"center"}}> {A.map((item,index) => (
  <Card
    key={index}
    img={item.img}
    cloth={item.cloth}
    offer={item.offer}
    price={item.price}
  />
))}
</div>

<Footer/>
</>
      
    </div>
  )
}
const reactroot=ReactDom.createRoot(document.getElementById('root'));
reactroot.render(<App/>);