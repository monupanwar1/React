import  { useState, useEffect } from "react";

const Show = () => {  
const [first, setfirst] = useState(["now you can clicked on the button"])
const [second, setsecond] = useState(["now you can clicked on the button"])
  useEffect(() => {
    console.log("button is clicked")
    
  
    return () => {
      console.log("button is unclicked")
    }
  },[second])
  
        

  return (
    <div className="p-10">
  <h1>{first}</h1>
  <button onClick={()=>setfirst("first button is clicked once")} className="bg-blue-500 px-4 py-1 rounded">button1</button>
  <h1>{second}</h1>
  <button onClick={()=>setsecond("second is clicked")} className="bg-rose-200 px-4 py-1 rounded">button2</button>
    </div>
  );
};

export default Show;
