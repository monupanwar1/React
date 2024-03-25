import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ handleSubmitform }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    handleSubmitform(data);
    reset();
  };
  
  return (
    <div className="flex gap-12">
      <form
        className="outline-none rounded-md flex gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('name')}
          className="outline-none rounded-md bg-white font-semibold"
          type="text"
          placeholder="name"
        />
        <input
          {...register('email')}
          className="outline-none rounded-md bg-white font-semibold"
          type="email"
          placeholder="email"
        />
        <input
          {...register('image')}
          className="outline-none rounded-md bg-white font-semibold"
          type="text"
          placeholder="image url"
        />
        <input className="bg-blue-500 rounded-md px-4 py-1" type="submit" />
      </form>
    </div>
  );
};

export default Form;
