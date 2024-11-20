"use client";
import { categories } from "../../constant/index";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="container mt-8">
      <div className="grid grid-cols-8 gap-6">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
