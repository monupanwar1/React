// import React from "react";

// const App = () => {
//   const data3 = ["harsh", "kunaL", "Panwar", "somebody else"];
//   const data = 12;
//   const data1 = 13;

//   return (
//     <div>
//       {data3.map((elem, index) => (
//         <div key={index} className="px-3 py-4 bg-zinc-300 rounded-lg">
//           Hey
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

import React from "react";
import Card from './card'; // Assuming card.jsx or card.js is in the same directory as App.jsx

const App = () => {
  return (
    <>
      <Card />
    </>
  );
}

export default App;
