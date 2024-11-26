import { toggleSidebar } from "@/app/lib/redux/features/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import React from "react";
import {
  BsLayoutSidebarInset,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";

const SidebarToggler = () => {
  const sidebarStatus = useAppSelector((state) => state.sidebar.sidebarStatus);
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(toggleSidebar())}
      className="absolute top-3 left-3 z-50">
      {sidebarStatus ? (
        <BsLayoutSidebarInsetReverse size={24} />
      ) : (
        <BsLayoutSidebarInset size={24} />
      )}
    </button>
  );
};

export default SidebarToggler;
