import React from 'react';

const Card1 = ({ user, handleRemov, id }) => {
  return (
    <>
      {/* Mapping over the user array to render each user card */}
      {user.map((item, index) => (
        <div className='h-60 rounded-md text-center w-48 p-1 bg-white' key={index}>
          {/* Displaying user image */}
          <div className='h-14 w-14 rounded-full overflow-hidden bg-zinc-400 items-center justify-center mt-3 ml-16'>
            <img className='h-full w-full object-cover items-center' src={item.image} alt="User Image" />
          </div>
          {/* Displaying user name and email */}
          <h1 className='font-semibold text-black'>{item.name}</h1>
          <h4 className="opacity-1 font-semibold text-xs">{item.email}</h4>
          {/* Displaying additional information */}
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          {/* Button to remove the card */}
          <button onClick={() => handleRemov(id)} className='bg-red-500 rounded-md px-4 py-1 mt-3'>Remove it</button>
        </div>
      ))}
    </>
  );
};

export default Card1;
