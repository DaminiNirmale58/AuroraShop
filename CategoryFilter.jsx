import React from "react";

import { initialProducts } from "../data/product";

import { Tag } from "lucide-react";

const availableCategories = [
  "All",
  ...new Set(initialProducts.map((p) => p.category)),
];

const CategoryFilter = ({selectedCategory, setSelectedCategory}) => {
 
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-3 border-b border-violet-400/20 pb-4 sm:pb-6">
        <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 mt-2 mr-1 sm:mr-2 hidden sm:block" />
        {availableCategories.map((category) => (
          <button
            key={category}
            onClick={()=>setSelectedCategory(category)}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold rounded-full transition duration-200 shadow-md ${
              selectedCategory === category
                ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-violet-900/40"
                : "bg-[#12162d]/80 text-slate-300 hover:bg-[#1a2040] hover:text-cyan-300 border border-violet-300/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;
