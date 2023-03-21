import React, { useEffect } from "react";
import { useState } from "react";

function Test() {
  const [inputText, setInputText] = useState('');
  
  useEffect(()=>{
    console.log("Component Mounted")
    
    return () =>{ console.log("Component unmounted")}
  },[inputText])

  

  return (
    <div>
     <input 
     onChange={
        (e)=>setInputText(e.target.value)
        }/>
    <h1>{inputText}</h1>
    </div>
  );
}

export default Test;
