// import React, { useRef } from 'react'

// const App = () => {

//     const name =useRef(null);
//     const age =useRef(null);
//     const email =useRef(null);

//     const handleSubmit =(event)=>{
//         event.preventDefault();
//         console.log(name.current.value);
//         console.log(age.current.value);
//         console.log(email.current.value);
//     }

//   return (
//    <div>

//     <form  className='flex gap-2 p-4'  action="" onSubmit={handleSubmit}>
//         <input ref={name} className='text-black border-2 border-black' type="text" placeholder='name' />
//         <input  ref={age} className='text-black border-2 border-black' type="text" placeholder='enter your name' />
//         <input  ref={email} className='text-black border-2 border-black' type="email" placeholder='enter your name' />
//         <input  className='border-black border-2 rounded-md bg-green-500' type="submit" />

//     </form>

//     </div>
//   )
// }

// // export default App;
// import React, { useState } from "react";

// const App = () => {
//   const [val, setVal] = useState({ name: "", age: "", email: "" });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(val.name);
//     console.log(val.age);
//     console.log(val.email);
//   };

//   return (
//     <div>
//       <form className="flex gap-2 p-4" onSubmit={handleSubmit}>
//         <input
//           onChange={(event) => setVal({ ...val, name: event.target.value })}
//           className="text-black border-2 border-black"
//           type="text"
//           placeholder="Name"
//         />
//         <input
//           onChange={(event) => setVal({ ...val, age: event.target.value })}
//           className="text-black border-2 border-black"
//           type="text"
//           placeholder="Age"
//         />
//         <input
//           onChange={(event) => setVal({ ...val, email: event.target.value })}
//           className="text-black border-2 border-black"
//           type="email"
//           placeholder="Email"
//         />
//         <button
//           className="border-black border-2 rounded-md bg-green-500"
//           type="button"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className="flex gap-2 p-4" onSubmit={handleSubmit(data=>console.log(data))}>
        <input
          {...register("name")}
          className="text-black border-2 border-black"
          type="text"
          placeholder="Name"
        />
        <input
          {...register("age")}
          className="text-black border-2 border-black"
          type="text"
          placeholder="Age"
        />
        <input
          {...register("email")}
          className="text-black border-2 border-black"
          type="email"
          placeholder="Email"
        />
        <button
          className="border-black border-2 rounded-md bg-green-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
