import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ShoppingCart } from "lucide-react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const [heartBump, setHeartBump] = useState(false);
  const active = isWishlisted(product.id);

  const onHeartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHeartBump(true);
    window.setTimeout(() => setHeartBump(false), 240);
    toggleWishlist(product);
  };
  return (
    <>
      <div className="rounded-2xl bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden flex flex-col h-full transition duration-500 transform border border-violet-300/20 group hover:scale-[1.02] sm:hover:scale-[1.03] hover:shadow-violet-900/35">
        <Link
          to={`/product/${product.id}`}
          className="relative cursor-pointer overflow-hidden"
        >
          <button
            type="button"
            onClick={onHeartClick}
            aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
            className={[
              "absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full",
              "border border-violet-300/30 bg-[#0b0f26]/70 backdrop-blur-md",
              "text-slate-200 hover:text-cyan-300 hover:border-cyan-300/50",
              "shadow-lg shadow-violet-900/20 transition-all duration-300",
              "hover:scale-105 active:scale-95",
              heartBump ? "heart-pop" : "",
            ].join(" ")}
          >
            {active ? (
              <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-violet-300 drop-shadow-[0_0_12px_rgba(167,139,250,0.35)]" />
            ) : (
              <FiHeart className="w-4 h-4 sm:w-5 sm:h-5 mx-auto" />
            )}
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-44 sm:h-52 lg:h-56 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:opacity-90"
          />
        </Link>

        <div className="p-4 sm:p-5 flex flex-col grow">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-lg sm:text-xl font-black text-white mb-1.5 sm:mb-2 cursor-pointer hover:text-cyan-300 transition duration-200 line-clamp-1 tracking-tight">
              {product.name}
            </h3>
          </Link>

          <p className="text-lg sm:text-[1.2rem] font-black tracking-tight text-violet-400 mb-1.5 sm:mb-2">
            ₹{product.price.toFixed(2)}
          </p>

          <p className="text-slate-300/65 text-[11px] sm:text-xs mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center text-xs text-gray-500 mb-4 sm:mb-5">
            <span className="px-2.5 sm:px-3 py-1 bg-[#11162d] border border-violet-300/20 rounded-full font-semibold text-slate-200">
              {product.category}
            </span>
          </div>

          <button
          onClick={()=>addToCart(product)}
           className="max-auto w-full py-2.5 sm:py-3 bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-sm sm:text-base font-bold rounded-full shadow-lg shadow-violet-900/40 cursor-pointer hover:from-violet-400 hover:to-indigo-400 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-violet-500/30 uppercase tracking-wide sm:tracking-wider">
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
