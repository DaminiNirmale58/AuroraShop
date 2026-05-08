import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../data/product";

import { ShoppingCart, ChevronLeft, Tag, Zap } from "lucide-react";

import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  // console.log("data from id = ",useParams())

  const { id } = useParams();
  const [product, setproduct] = useState();

  const { addToCart } = useCart();

  useEffect(() => {
    setproduct(initialProducts.find((data) => data.id == id));
  }, [id]);

  // console.log("my product = ", product);

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 bg-white/5 backdrop-blur-xl min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-violet-300/20">
        <Link to={"/"}>
          <button className="cursor-pointer flex items-center text-slate-300 hover:text-cyan-300 transition duration-150 mb-12 font-semibold text-lg">
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to All Products</span>
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          <div className="w-full">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-[400px] h-[400px] object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-[2rem] font-black text-white mb-4 leading-tight tracking-tight">
                {product?.name}
              </h1>
            </div>
            <div className="mb-4 inline-flex items-center rounded-full border border-fuchsia-300/30 bg-gradient-to-r from-violet-500/25 to-fuchsia-400/20 px-5 py-2 shadow-lg shadow-violet-900/25">
              <p className="text-3xl font-black tracking-wide text-fuchsia-200 drop-shadow-[0_0_14px_rgba(232,121,249,0.3)]">
                ₹{product?.price.toFixed(2)}
              </p>
            </div>

            <h2 className="text-xl font-bold text-gray-200 mb-2 border-b border-violet-300/20 pb-2 flex items-center space-x-2">
              <Tag className="w-5 h-5 text-violet-300" />
              <span>Product Overview</span>
            </h2>

            <p className="text-slate-300/65 text-sm leading-relaxed mb-3">
              {product?.description}
            </p>

            <ul className="space-y-3 text-gray-300 p-4 bg-[#11162d]/90 rounded-xl border border-violet-300/20">
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="w-5 h-5 text-cyan-300" />
                <span>High-Quality, Professional Grade Materials</span>
              </li>
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="w-5 h-5 text-cyan-300" />
                <span>Comprehensive 1-Year Manufacturer Warranty</span>
              </li>
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="w-5 h-5 text-cyan-300" />
                <span>Immediate Shipping for In-Stock Items</span>
              </li>
            </ul>

            <div className="mt-5 space-y-4 flex justify-center items-center flex-col">
              <button
                onClick={() => addToCart(product)}
                className="w-full py-3 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-bold rounded-full shadow-lg shadow-violet-900/40 cursor-pointer hover:from-violet-400 hover:to-indigo-400 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-violet-500/30 uppercase tracking-wider"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Add to Cart</span>
              </button>

              <Link
                to={"/"}
                className="w-full py-3 border-2 border-violet-400/60 text-violet-300 font-bold rounded-full cursor-pointer hover:bg-violet-500/15 transition duration-300 uppercase tracking-wider text-center"
              >
                Keep Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
