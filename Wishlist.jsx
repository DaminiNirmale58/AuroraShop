import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

import ProductCard from "../components/ProductCard";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, wishlistCount } = useWishlist();

  if (wishlistCount === 0) {
    return (
      <div className="container mx-auto px-4 md:px-8 pt-10 pb-14">
        <div className="max-w-2xl mx-auto rounded-3xl bg-white/5 backdrop-blur-xl border border-violet-300/20 shadow-2xl shadow-black/25 p-8 sm:p-12 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-300/20 flex items-center justify-center">
            <FiHeart className="w-8 h-8 text-violet-300" />
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl font-black tracking-tight text-white">
            Your wishlist is empty
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300/70 leading-relaxed">
            Save products you love and come back anytime — your wishlist stays
            synced on refresh.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center px-7 py-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-extrabold shadow-lg shadow-violet-900/40 hover:from-violet-400 hover:to-indigo-400 transition duration-300 hover:ring-4 hover:ring-violet-500/30"
          >
            Explore Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8 pt-10 pb-14">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Wishlist
          </h2>
          <p className="text-sm text-slate-300/70 mt-1">
            {wishlistCount} saved {wishlistCount === 1 ? "item" : "items"}
          </p>
        </div>
        <Link
          to="/"
          className="text-sm font-semibold text-slate-300 hover:text-cyan-300 transition-colors duration-300"
        >
          Continue shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

