import Link from "next/link";
import React from "react";
import { LuChevronDown } from "react-icons/lu";
import { links } from "../constant/index";

const InfoSection = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row flex-wrap container gap-5 mt-10">
      <div className="w-full ">
        <h3 className="text-lg md:text-base font-semibold text-neutral-800">
          Rent a villa, suite, apartment, and various accommodations from
          Jabama.
        </h3>
        <p className="text-sm text-neutral-500 mt-2">
          Travel always brings with it a sense of "joy," whether you're bursting
          with energy and hitting the road, or you're traveling to find that
          "joy" somewhere far away, under a bluer sky. If you're here, it means
          you're looking for that very "joy of travel"! Here, you have the
          freedom to rent a villa anywhere in Iran with any amenities. Thinking
          of renting a villa in the north to enjoy the seaside? Want a cozy
          forest cabin or a villa with a pool for a trip with friends? Or maybe
          you're looking for a suite in Kish for a family vacation? On Jabama,
          you can explore hundreds of accommodations, view images
        </p>
        <div className="flex items-center gap-x-1 text-sm mt-2 cursor-pointer">
          <Link href="/">Show more</Link>
          <LuChevronDown />
        </div>
      </div>
      <div className="w-full">
        <h3 className="text-lg md:text-base font-semibold text-neutral-800">
          From north to south of Iran, Jabama has you covered.
        </h3>

        <div className="flex flex-wrap items-center gap-4 mt-4">
          {links.map((link) => (
            <Link
              className="rounded-full p-1 px-2 bg-orange-100/60"
              href={`/${link.title}`}
              key={link.id}>
              <p className="text-sm capitalize">{link.title}</p>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-1 text-sm mt-2 cursor-pointer">
          <Link href="/">Show more</Link>
          <LuChevronDown />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
