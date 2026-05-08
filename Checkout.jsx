import React, { useState } from "react";

import { useCart } from "../context/CartContext";
import OrderConfimation from "./OrderConfirmation";
import { Link } from "react-router-dom";

import { Package, MapPin } from "lucide-react";

const Checkout = () => {
  const { cartTotal, clearCart, cart } = useCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true);
  };

  console.log("shipping data = ", deliveryDetails);

  if (isConfirmed)
    return <OrderConfimation deliveryDetails={deliveryDetails} />;

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <h2 className="text-5xl font-extrabold text-white mb-10 tracking-tight">
          Finalize Order
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 p-8 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-violet-300/20">
            <h3 className="text-3xl font-bold text-cyan-300 mb-6 flex items-center space-x-3 border-b border-violet-300/20 pb-4">
              <MapPin className="w-7 h-7 text-cyan-300" />
              <span>Shipping Information</span>
            </h3>

            <form className="space-y-6" onSubmit={handleSumbit}>
              {Object.keys(deliveryDetails).map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block text-sm font-semibold text-gray-300 capitalize mb-1"
                  >
                    {key === "zip" ? "Pin Code " : key}
                  </label>
                  <input
                    type={key === "zip" ? "number" : "text"}
                    id={key}
                    name={key}
                    value={deliveryDetails[key]}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-5 py-3 border border-violet-300/20 rounded-xl shadow-inner text-white bg-[#121730] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                  />
                </div>
              ))}

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-extrabold text-xl rounded-full shadow-lg shadow-violet-900/40 cursor-pointer hover:from-violet-400 hover:to-indigo-400 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-violet-500/30 uppercase tracking-wider"
                >
                  {/* <Zap className="w-6 h-6" /> */}
                  <span>₹ Pay and Confirm Order (₹{cartTotal.toFixed(2)})</span>
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary in Checkout */}
          <div className="lg:col-span-1 p-8 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border-1-4 sticky top-20 h-fit border border-violet-300/20">
            <h3 className="text-3xl font-bold text-white mb-5 border-b border-violet-300/20 pb-3 flex items-center space-x-2">
              <Package className="w-6 h-6 text-cyan-300" />

              <span>Summary</span>
            </h3>
            <div className="space-y-4 text-slate-300">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-base border-b border-violet-300/20 pb-2"
                >
                  <span className="trucate text-gray-300">{item.name}</span>
                  <span className="font-medium text-violet-300">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}

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
                     Total Due:
                  </span>
                  <span className="text-3xl font-extrabold text-cyan-300">
                    ₹{cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          

          
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
