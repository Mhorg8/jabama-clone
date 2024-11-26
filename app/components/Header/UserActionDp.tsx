"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import {
  IoLogInOutline,
  IoPersonOutline,
  IoChevronDown,
  IoBasketOutline,
} from "react-icons/io5";

const UserActionDp = () => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="flex flex-col text-sm relative ">
      <div
        className="flex items-center gap-x-1 p"
        onClick={() => setOpenDropDown((prev) => !prev)}>
        <button className="capitalize">{session?.user.name}</button>
        <IoChevronDown size={14} />
      </div>
      {openDropDown && (
        <ul className="bg-neutral-200 p-2 rounded-lg w-[130px] flex  flex-col absolute top-6 gap-2 right-0">
          <div className="dropdown__item">
            <Link
              href="/profile"
              className="hover:text-orangeColor hover:scale-105">
              Profile
            </Link>
            <IoPersonOutline size={18} />
          </div>
          <div className="dropdown__item">
            <Link
              href="/cartList"
              className="hover:text-orangeColor hover:scale-105">
              Shopping list
            </Link>
            <IoBasketOutline size={18} />
          </div>
          <div className="dropdown__item">
            <button
              onClick={() =>
                signOut({
                  redirect: false,
                })
              }
              className="">
              Logout
            </button>
            <IoLogInOutline size={18} />
          </div>
        </ul>
      )}
    </div>
  );
};

export default UserActionDp;
