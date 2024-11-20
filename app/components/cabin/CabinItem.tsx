import React from "react";
import { Cabin } from "../../types/types";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
interface Props {
  item: Cabin;
}
const CabinItem = ({ item }: Props) => {
  return (
    <Link
      href={`/stay?id=${item.id}`}
      className="w-full h-[300px] md:h-[350px] flex flex-col bg-white rounded-lg p-2">
      <div className="relative w-full h-1/2 mb-3">
        <ImageSlider delay={2000} images={item.images} />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-x-1 text-sm my-1 ">
          <span className="text-neutral-400 text-xs md:text-sm">
            (450 rate)
          </span>
          <h4 className="font-bold text-base">{item.rate}</h4>
          <FaStar className="text-yellow-500" size={14} />
        </div>
        <div className="flex flex-col ">
          <h2 className="text-lg md:text-xl font-semibold ">{item.name}</h2>
          <p className="text-sm md:text-base text-neutral-400">
            {item.location[0]}
          </p>

          <div className="flex items-center">
            <span className="text-sm md:text-base text-neutral-400">
              for night /
            </span>
            <span className="text-base md:text-lg font-semibold">
              ${item.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CabinItem;
