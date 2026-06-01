import React,{useSate,useEffect} from "react";
function Body(){
  const[profile,setProfile]=React.useState([]);
  const[numberofprofile,setNumberofprofile]=React.useState("");

   async function generateprofile(count){const rando=Math.floor(1+Math.random()*10000);
  const response=await fetch(`https://api.github.com/users?since=${rando}per_page=${count}`);
   
  const data=await response.json();
  setProfile(data);
  }
  useEffect(()=>{
    generateprofile(10);
  },[]);

  return(
    <div className="btn">
      <input type="text" placeholder="Type value here"className="search" value={numberofprofile}  onChange={(e)=>setNumberofprofile(e.target.value)}/>
      <button className="sbtn" onClick={()=>generateprofile(Number(numberofprofile))}>Search</button>

  
<div className="profiles">
  {
  profile.map((item,index)=>(
     <div key={index} className="card">
      <img src={item.avatar_url} alt={item.login} className="image" />
      <h2>{item.login}</h2>
      <a href={item.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
    </div>
  ))}
</div>
  </div>
  )
}
export default Body;