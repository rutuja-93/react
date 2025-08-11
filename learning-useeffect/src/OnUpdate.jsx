import React,{useEffect, useState} from "react";

function OnUpdate(){
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2]=useState(0);
  
  
    useEffect(()=>{
      console.log("API Call");
  
    }, [counter]);
  
    return (
      <>
     <h1>Hii There {counter}</h1>
     <button onClick={()=>setCounter(counter + 1)}>+</button>
  <h2>counter 2 is {counter2}</h2>
     <button onClick={()=>setCounter2(counter2 + 1)}>+</button>
      </>
    );
}

export default OnUpdate;