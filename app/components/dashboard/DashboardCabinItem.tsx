import Image from "next/image";
import React from "react";
import DashboardItemAction from "./DashbaordItemActions";
import { Cabin } from "@/app/types/types";

interface Props {
  cabin: Cabin;
}

const DashboardCabinItem = ({ cabin }: Props) => {
  return (
    <div
      key={cabin.id}
      className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg cursor-pointer
       col-span-6 md:col-span-3 lg:col-span-2 h-[300px]">
      <div className="relative h-2/3 w-full group">
        <Image
          src={cabin.images}
          alt={cabin.name}
          fill
          sizes="fill"
          className="object-cover rounded-md"
        />
        <div
          className="absolute top-0 right-0 w-full h-full rounded-md bg-black/30 
        z-20 hidden group-hover:flex items-center justify-center flex-col text-white transition duration-200">
          <h3>Bed: {cabin.bed}</h3>
          <h3>Room: {cabin.room}</h3>
        </div>
      </div>
      <div className="space-y-2 mt-2">
        <div>
          <h2 className="text-lg font-semibold leading-none capitalize">
            {cabin.name}
          </h2>
          <span className="text-sm text-neutral-600">{cabin.location}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h3>Price: ${cabin.price}</h3>
          </div>

          <DashboardItemAction id={cabin.id} url="/api/newCabin" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCabinItem;
