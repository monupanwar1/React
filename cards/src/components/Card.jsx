import React from 'react';

function Card({ data,handleclick,index }) {
  const { name, song, image, artist,added } = data;
  return (
    <div className='flex gap-4 ml-3 mt-7 w-80 h-100 bg-zinc-100 p-4 rounded-md'>
      <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'><img className=' h-full w-full object-cover ' src={image} alt="" /></div>
      <div className='text-black py-1'>
        <h3 className='text-xl font-semibold'>{song}</h3>
        <h6 className='text-sm'>{artist}</h6>
        <button onClick={()=>handleclick(index)}
         className={ `${added===false? "bg-green-500 ":"bg-orange-500"  } px-4 mt-3 whitespace-nowrap rounded-md`} >{ added===false ? "Add To Favourite ": "Added"}</button>
      </div>
    </div>
  );
  }

export default Card;
