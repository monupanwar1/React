import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const data = [
    {
      name: "kunal",
      profession: "coder",
      image:
        "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
      friends: false,
    },
    {
      name: "pandacode1",
      profession: "software engineer",
      image:
        "https://images.unsplash.com/photo-1589234217365-08d3e0e5cf42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMG1vZGVsfGVufDB8fDB8fHww",
      friends: false,
    },
    {
      name: "harsh",
      profession: "web-dev",
      image:
        "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMG1vZGVsfGVufDB8fDB8fHww",
      friends: false,
    },
  ];

  // Use realdata state to manage the data
  const [realdata, setRealData] = useState(data);
  const dummy =()=>{
  
  }

  return (
    <div>
      <div className="w-full flex items-center justify-center gap-10 h-screen bg-zinc-500">
        {/* Map over realdata and pass each item as values to the Card component */}
        {realdata.map((item, index) => (
          <Card key={index} dummy={dummy} values={item} />
        ))}
      </div>
    </div>
  );   
};

export default App;
