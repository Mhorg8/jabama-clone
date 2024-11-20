"use client";
import React from "react";
import { Category } from "../../types/types";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const CategoryItem = ({ item }: { item: Category }) => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams();
    params.set("category", category);

    // Push the new URL with the query param
    router.push(`/?${params.toString()}`);
  };

  return (
    <motion.button
      initial={{ color: "#000", scale: 1 }}
      whileHover={{ color: "#ffa500", scale: 1.1 }}
      transition={{ duration: 0.2 }}
      onClick={() => handleCategoryClick(item.category)}
      className="col-span-2 md:col-span-1 flex items-center justify-center flex-col cursor-pointer z-20">
      {item.Icon && <item.Icon size={24} />}
      <p>{item.category}</p>
    </motion.button>
  );
};

export default CategoryItem;
