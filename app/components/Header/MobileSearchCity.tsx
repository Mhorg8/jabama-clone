import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const MobileSearchCity = () => {
  return (
    <div className="bg-white border border-neutral-500 border-b-4 border-b-orangeColor rounded-xl py-3 px-2 flex items-center justify-between ">
      <input
        type="text"
        placeholder="Search city"
        className="border-none outline-none bg-transparent"
      />
      <IoSearchOutline color="#737373 " size={18} />
    </div>
  );
};

export default MobileSearchCity;
