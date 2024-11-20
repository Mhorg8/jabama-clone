import React from "react";
import { Location } from "../types/types";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  item: Location;
}

const LocationItem = ({ item }: Props) => {
  return (
    <div className="relative h-full my-10">
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        whileHover={{
          scale: 1.05,
          opacity: 1,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative w-[120px] h-[130px] md:w-[220px] md:h-[240px] rounded-lg overflow-hidden">
        <Image
          fill
          sizes="fill"
          src={item.images}
          alt={item.location}
          className="object-cover"
        />
      </motion.div>
      <p className="capitalize font-medium mt-1 md:text-xl ">{item.location}</p>
    </div>
  );
};

export default LocationItem;
