import React, { useState } from 'react';
import Cards from './components/Cards';
import Form from './components/Form';

const App = () => {
  // State to hold user data
  const [user, setUser] = useState([]);

  // Function to handle form submission
  const handleSubmitform = (data) => {
    setUser([...user, data]); // Adding new data to the user state
  };

  // Function to handle removal of a card
  const handleRemove = (id) => {
    setUser(() => user.filter((item, index) => index !== id)); // Filtering out the card to be removed
  };

  return (
    <div className='bg-zinc-400 h-screen w-full flex items-center justify-center'>
      <div className='flex flex-col gap-10 px-4 items-center justify-center'>
        {/* Cards component to display user data */}
        <Cards handleRemove={handleRemove} user={user} />
        
        {/* Form component to submit new data */}
        <Form handleSubmitform={handleSubmitform} />
      </div>
    </div>
  );
};

export default App;
