"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoLogInOutline } from "react-icons/io5";
import MobileSearchCity from "./MobileSearchCity";
import { useSession } from "next-auth/react";
import UserActionDp from "./UserActionDp";

const MobileHeader = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full top-0 left-0 z-50 container py-4 bg-white h-fit">
      <div
        className={`${
          scrollHeight < 200 ? "flex items-center justify-between" : "hidden"
        }`}>
        <div className="flex-1">
          <h2 className="text-xl font-bold">
            <span className="text-orangeColor">Ja</span>bama
          </h2>
          <p className="text-xs text-neutral-700 ">
            Rent a villa, house, or apartment in Iran.
          </p>
        </div>

        <div className="flex items-center gap-x-1.5">
          {session ? (
            <UserActionDp />
          ) : (
            <>
              <Link href={"/sign-up"} className="text-sm ">
                Sign in / Sign up
              </Link>
              <IoLogInOutline size={18} />
            </>
          )}
        </div>
      </div>
      <div className="mt-5">
        <MobileSearchCity />
      </div>
    </div>
  );
};

export default MobileHeader;
