import { useState } from "react";

const App = () => {
const [val, setVal] = useState(0);

const addclick =()=>{
    setVal(val+1);
    


}
const removeclick =()=>{
    (val>0)?setVal(val-1):setVal(0);
}

    
  return <div className="items-ceter justify-center flex mt-20">
<div className="h-80 w-80 items-center flex justify-center text-black bg-slate-400">


   <div className="flex gap-10 flex-col">
   <h1>counter value:<span>{val}</span></h1>
   <button onClick={addclick} className="px-4 py-1 bg-green-500">ADD</button>
   <button onClick={removeclick} className="px-4 py-1 bg-green-500">Remove</button>

   </div>

</div>
    


  </div>;
};

export default App;
