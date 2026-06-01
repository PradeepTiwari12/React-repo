import React ,{useCallback, useEffect}from 'react';
import ReactDom from 'react-dom/client';

function Passwordgenetor(){
  const [password,setPassword]=React.useState("");
  const[length,setLength]=React.useState(8);
  const[numberchanged,setNumberchanged]=React.useState(false);
  const[charchanged,setCharchanged]=React.useState(false);

  const generatepassword=useCallback(()=>{

 
    let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(charchanged){
      chars+="!@#$%^&*()_{}[]/+";
    }
    if(numberchanged){
      chars+="0123456789";
    }
    let pass="";
    for(let i=0;i<length;i++){
      pass+=chars.charAt(Math.floor(Math.random()*chars.length));
    }
    setPassword(pass);
  },[length,numberchanged,charchanged])

useEffect(()=>{
  generatepassword();
},[length,numberchanged,charchanged])


   return(
    <>
    <h1>Password is:{password}</h1>
    <div className='first'>
    <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
    <label>length ({length})</label>

    <input type="checkbox" defaultChecked={numberchanged} onChange={()=>setNumberchanged(!numberchanged)}></input>
    <label>number</label>
     <input type="checkbox" checked={charchanged} onChange={()=>setCharchanged(!charchanged)}></input>
    <label>symbol</label>
    </div>

    </>
   )
  }
  const Reactroot=ReactDom.createRoot(document.getElementById('root'));
  Reactroot.render(<Passwordgenetor/>);