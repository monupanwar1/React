import React from "react";

function Card({ values ,dummy }) {
  // Destructure the values directly in the function parameters
  const { name, image, profession } = values;

  return (
    <div className="bg-white w-52 h-80 rounded-md overflow-hidden">
      <div className="bg-sky-200 rounded-md w-full h-52">
        {/* Ensure the image has an alt attribute */}
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="w-full p-3">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <h5>{profession}</h5>
        <button onClick={dummy}
         className="mt-2 bg-blue-500 px-4 py-1 rounded" type="button">
          {/* Fix typo in "Add friend" */}
          Add Friend
        </button>
      </div>
    </div>
  );
}

export default Card;
