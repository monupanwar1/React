import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero flex sticky-0 gap-14 h-auto w-full mt-4  px-4 overflow-hidden">
        <div className="left text-wrap  ">
          <h1 className="text-9xl w-1/2 font-bold text-black ,">YOUR FEET DESERVE THE BEST</h1>
          <p  className= "px-2  font-['montserrat'] mt-4 w-1/2 ">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

         <div className="buttons flex gap-20 text-center mt-4 px-4 items-center">
          <button className="  bg-green-500 h-10 hover:bg-rose-500 w-24 rounded ">shopnow</button>
          <button className="  bg-transparent border-2 hover:bg-sky-700 border-black rounded h-10 w-24 outline-1 "> category</button>

         </div>


          <p className="text-black-500 font-semibold mt-4 px-3 "> also avilable on </p>


          <div className="right  absolute top-1/2  right-14  mt-14 -translate-x-14 -translate-y-1/2">


            <img  className="  "  src="/images/hero-image.png" alt="" srcset="" />
          </div>


          <div className="btm-images flex px-4 gap-10 mt-4">

            <img src="/images/amazon.png" alt="" srcset="" />
            <img src="/images/flipkart.png" alt="" srcset="" />

          </div>

        </div>

       
      </div>
    </>
  );
};

export default Hero;
