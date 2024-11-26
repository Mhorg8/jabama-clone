"use client";
import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
// import { FaRegEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
// import UpdateItemModal from "../forms/UpdateItemModal";

interface Props {
  id: string;
  url: string;
}

const DashboardItemAction = ({ id, url }: Props) => {
  const router = useRouter();

  const deleteItem = async (locationId: string) => {
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ locationId }),
      });

      if (!res.ok) {
        throw new Error("Failed to connect to server");
      }

      const data = await res.json();

      if (data) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative ">
      <div className="flex items-center gap-x-2 relative z-20">
        {/* <motion.button
          initial={{ color: "#000", scale: 1 }}
          whileHover={{ color: "#8DB600", scale: 1.09 }}>
          <FaRegEdit size={20} />
        </motion.button> */}
        <motion.button
          initial={{ color: "#000", scale: 1 }}
          whileHover={{ color: "#C51E3A", scale: 1.09 }}
          onClick={() => deleteItem(id)}>
          <FaRegTrashCan size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default DashboardItemAction;
