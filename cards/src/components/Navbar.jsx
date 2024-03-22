import React from "react";

const Navbar = ({data}) => {

  return (
    <div className="  flex w-full px-4 py-2  items-center justify-between ">
      <h3 className=" font-bold text-zinc-100">Musictone</h3>
      <div className=" flex px-4 py-1 bg-orange-600 text-white rounded-md gap-3 ">
        <h3>Favourite</h3>
        <h4>{data.filter(item=>item.added).length}</h4>
      </div>
    </div>
  );
};

export default Navbar;
