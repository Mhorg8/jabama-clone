"use client";
import { sidebarItem } from "@/app/types/types";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
interface Props {
  item: sidebarItem;
}

const SidebarItem = ({ item }: Props) => {
  const router = useRouter();
  const updateUrl = (path: string) => {
    router.push(`/dashboard/${path}`);
  };

  return (
    <motion.button
      onClick={() => updateUrl(item.path)}
      className="cursor-pointer w-full flex items-center justify-center"
      initial={{ scale: 1, color: "#000" }}
      whileHover={{ scale: 1.2, color: "#ffa500" }}
      transition={{ duration: 0.2 }}>
      <div className="">{item.Icon && <item.Icon size={24} />}</div>
      <p className="hidden md:block md:w-[100px]">{item.title}</p>
    </motion.button>
  );
};

export default SidebarItem;
