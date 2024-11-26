"use client";
import { IoSearchOutline } from "react-icons/io5";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const MobileSearchCity = () => {
  // VARIABLES
  const searchQueryRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const searchCity = () => {
    const searchQuery = searchQueryRef.current?.value.trim();
    if (searchQuery) {
      router.push(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="bg-white border border-neutral-500 border-b-4 border-b-orangeColor rounded-xl py-3 px-2 flex items-center justify-between ">
      <input
        ref={searchQueryRef} // Assign the ref to the input
        type="text"
        placeholder="Search city"
        className="border-none outline-none bg-transparent"
      />
      <button onClick={searchCity}>
        <IoSearchOutline color="#737373 " size={18} />
      </button>
    </div>
  );
};

export default MobileSearchCity;
