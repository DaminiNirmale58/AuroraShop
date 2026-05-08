import React from "react";

import { Search } from "lucide-react";

const SearchFilter = ({searchTerm, setSearchTerm}) => {
  return (
    <>
      <div className="mb-4 sm:mb-5 p-3 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-violet-300/20 shadow-xl shadow-black/20">
        <div className="flex items-center border border-violet-300/20 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-violet-500/30 transition duration-300 bg-[#0f1228]/80">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-violet-300 ml-3 sm:ml-4 " />
          <input
            type="text"
            placeholder="Search products by name or category..."
            className="w-full p-3 sm:p-4 outline-none text-slate-100 bg-transparent placeholder-slate-400 text-sm sm:text-base font-medium"
            aria-label="Search Products"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
