import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {

  const handleclick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return { ...item, added: !item.added };

        return item;
      });
    });
  };

  const data = [
    {
      name: "KUNAL",
      song: "CHECK AKR 1",
      image:
        "https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZlbmdlcnN8ZW58MHx8MHx8fDA%3D",
      artist: "KUNAL PANWAR",
      added: false,
    },
    {
      name: "KUNAL",
      song: "CHECK AKR 2",
      image:
        "https://images.unsplash.com/photo-1608889345685-48bb8ef605e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGF2ZW5nZXJzfGVufDB8fDB8fHww",
      artist: "KUNAL PANWAR",
      added: false,
    },
    {
      name: "KUNAL",
      song: "CHECK AKR 2",
      image:
        "https://images.unsplash.com/photo-1608889345685-48bb8ef605e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGF2ZW5nZXJzfGVufDB8fDB8fHww",
      artist: "KUNAL PANWAR",
      added: true,
    },
    // Add other data items here...
  ];

  const [songData, setSongData] = useState(data);

  return (
    <div className="h-screen w-full bg-zinc-400">
      <Navbar data={songData} />

      <div className="flex flex-wrap gap-5 overflow-hidden mt-10">
        {songData.map((item, index) => (
          <Card key={index} index={index} data={item} handleclick={handleclick} />
        ))}
      </div>
    </div>
  );
};

export default App;
