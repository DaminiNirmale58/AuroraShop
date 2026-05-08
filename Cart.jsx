import React from "react";

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

import { ChevronLeft, Zap } from "lucide-react";

const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart();

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div className="flex items-center mb-10">
          <Link
            to={"/"}
            className="flex items-center text-slate-300 hover:text-cyan-300 transition duration-150 font-semibold text-lg"
          >
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to Store</span>
          </Link>
        </div>

        <h2 className="text-4xl font-extrabold text-white mb-10 tracking-tight">
          Shopping Cart ({cartCount})
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="lg:col-span-1 p-8 rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl border-1-4 sticky top-20 h-fit border border-violet-300/20">
            <h3 className="text-3xl font-bold text-white mb-5 border-b border-violet-300/20 pb-3 flex items-center space-x-2">
              <div className="flex justify-between">
                <span className="w-6 h-6 text-cyan-300">₹</span>
                <span>Order Total</span>
              </div>
            </h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex justify-between text-xl">
                <span>SubTotal :</span>
                <span className="font-semibold text-white">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Shipping (Express):</span>
                <span className="font-semibold text-green-400">Free</span>
              </div>
              <div className="flex justify-between pt-6 border-t border-violet-300/20">
                <span className="text-2xl font-extrabold text-white">
                  Estimated Total:
                </span>
                <span className="text-2xl font-extrabold text-cyan-300">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <Link
              to={"/checkout"}
              className="w-full mt-8 py-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-extrabold text-xl rounded-full shadow-lg shadow-violet-900/40 cursor-pointer hover:from-violet-400 hover:to-indigo-400 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-violet-500/30 uppercase tracking-wider"
            >
              <Zap className="w-6 h-6" />
              <span>Proceed Securely</span>
            </Link>
            
            <p className="text-xs text-gray-500 text-center mt-4">All transactions are encrypted and secure.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
