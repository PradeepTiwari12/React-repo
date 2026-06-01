import {useParams} from "react-router";
import { useState,useEffect } from "react";
export default  function Github(){
  const {name}=useParams();
   const[profile,setProfile]=useState(null);
 async function fetchuser(){

  const response=await fetch(`https://api.github.com/users/${name}`)
  const data=await response.json();
setProfile(data);
 }
  useEffect(() => {
    if (name) {
      fetchuser();
    }
  }, [name]);
 return(
  <>
  <h1>My Github Profile</h1>
  <div>
    <img src={profile?.avatar_url} alt="Profile Picture" width="200" height="200"/>
    <h2>{profile?.name}</h2> <p>{profile?.bio}</p> <p>Followers: {profile?.followers}</p> <p>Following: {profile?.following}</p> <a href={profile?.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
  </div>
  </>
 )
}