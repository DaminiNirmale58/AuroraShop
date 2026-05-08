import React from "react";
import { useCart } from "../context/CartContext";

import { X } from "lucide-react";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQ = () => addToCart(item);
  const descreaseQ = () => removeFromCart(item.id);

  return (
    <div
      className="flex flex-col items-center sm:flex-row justify-between p-4 sm:p-6 mb-4 bg-white/5 backdrop-blur-xl
  rounded-xl shadow-2xl border border-violet-300/20 transition duration-300 hover:border-violet-300/40"
    >
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg border-2 border-gray-700"
        />
        <div className="grow">
          <h3 className="text-xl font-bold text-white line-clamp-1">
            {item.name}
          </h3>

          <p className="text-lg text-cyan-300 font-semibold">
            ₹{item.price.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4">
        <div
          className="flex items-center border border-violet-300/20 rounded-full 
        overflow-hidden shadow-lg"
        >
          <button
            onClick={descreaseQ}
            className=" p-2 text-slate-300 bg-[#161a33] hover:bg-[#20284a]
           transition duration-150 w-8 h-8 items-center justify-center"
          >
            -
          </button>
          <span className="px-3 text-base font-bold text-white bg-[#161a33]">
            {item.quantity}
          </span>
          <button
            onClick={increaseQ}
            className=" p-2 text-slate-300 bg-[#161a33] hover:bg-[#20284a]
           transition duration-150 w-8 h-8 items-center justify-center"
          >
            +
          </button>
        </div>
        <p className="font-extrabold text-violet-300 w-24 text-right hidden md:block">
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>
        <button onClick={()=>removeFromCart(item.id, true)}
        className="p-3 bg-red-800/20 text-red-400 rounded-full hover:bg-red-800/40 transition duration-150 shadow-md"
          >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
