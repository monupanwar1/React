import React from 'react';

function Card() {
  const data = [
    { image: 'https://images.unsplash.com/photo-1709596046341-579b8918eb87?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'hii this' },
    { image: 'https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'this is boy' },
    { image: 'https://images.unsplash.com/photo-1709418399429-c12dd9aa2a20?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'this is girl' }
  ];

  return (
    <div className='gap-10 w-full h-screen flex items-center justify-center bg-zinc-500'>
      {data.map((elem, index) => (
        <div key={index} className='w-52  px-2 py-4 bg-zinc-100 overflow-hidden rounded-lg'>
          <div className='image h-full px-2 py-4 w-full rounded-full object-cover'>
            <img src={elem.image} alt="" />
          </div>
          <div className='description text-red-600 font-semibold mt-0'>
            <p className='text-center font-bold text-blue-500'>{elem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
