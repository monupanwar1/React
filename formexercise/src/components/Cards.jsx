import React from 'react';
import Card1 from './CardOne';

const Cards = ({ user, handleRemov }) => {
  return (
    <div className='w-full p-4 gap-10 flex items-center justify-center rounded-md'>
      {/* Mapping over the user array to render Card1 components */}
      {user.map((item, index) => (
        <Card1 handleRemov={handleRemov} id={index} key={index} user={user} />
      ))}
    </div>
  );
};

export default Cards;
