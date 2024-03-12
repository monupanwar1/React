import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState([
    { name:"kunal",age:20},
    { name:"harry",age:22},
    { name:"ram",age:24},
  ]);

  return (  
    <div className="px-3">
      {val.map((item)=><div>
        <h1>{item.name}</h1>
        <h1>{item.age}</h1>
      </div>)}

      <button
onClick={() =>setVal(()=>val.map(item=>item.name==="kunal"? ({name:"kunal",age:24}):item)) }
className="px-2 py-1 bg-green-500 rounded"
      >
        click me
      </button>
    </div>
  );
};

export default App;
