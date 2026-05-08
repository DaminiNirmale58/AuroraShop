import React from "react";
import { Link } from "react-router-dom";

import { Home, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { FiHeart } from "react-icons/fi";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-violet-500/20 bg-[#060816]/85 text-white backdrop-blur-xl shadow-2xl shadow-black/40">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center gap-3">
          <Link to={"/"}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <Home className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-300 drop-shadow-lg shrink-0" />
              <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-[0.2em] sm:tracking-widest uppercase leading-none">
                Aurora<span className="text-violet-400">Shop</span>
              </h1>
            </div>
          </Link>

          <nav className="flex items-center space-x-2 sm:space-x-3 md:space-x-6">
            <Link
              to={"/wishlist"}
              className="relative p-2 sm:p-2.5 md:p-3 bg-violet-500/10 rounded-xl hover:bg-violet-500/20 transition duration-200 border border-violet-300/40 shadow-lg shadow-violet-900/30 cursor-pointer"
            >
              <FiHeart className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-violet-300" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] sm:text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-cyan-500 rounded-full min-w-[20px] sm:min-w-[24px] h-[18px] sm:h-[20px]">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              to={"/cart"}
              className="relative p-2 sm:p-2.5 md:p-3 bg-violet-500/10 rounded-xl hover:bg-violet-500/20 transition duration-200 border border-violet-300/40 shadow-lg shadow-violet-900/30 cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-violet-300" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] sm:text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full min-w-[20px] sm:min-w-[24px] h-[18px] sm:h-[20px]">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
