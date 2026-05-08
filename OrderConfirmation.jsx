import React from 'react'

import { CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const OrderConfirmation = ({deliveryDetails}) => {
  return (
    <>
    <div className="container mx-auto md:px-8 pt-12">
      <div className='p-12 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-12 border border-violet-300/20 text-white'>
       <CheckCircle className='w-24 h-24 text-cyan-300 mx-auto mb-6 drop-shadow-lg ' />
       <h2 className='text-4xl font-extrabold text-white mb-4'>Order Confirmed!</h2>
       <p className='text-lg text-gray-300 mb-6'>
        Your transaction is complete. A confirmation email has been sent to your account.
       </p>

       <div className='p-6 bg-[#121730] border border-violet-300/20 rounded-xl font-mono text-left inline-block text-slate-200 text-sm'>
       <p className='font-semibold text-lg mb-1'>
        {deliveryDetails?.name}
       </p>
       <p>{deliveryDetails?.address}</p>
       <p>{deliveryDetails?.city},{deliveryDetails?.zip}</p>
       </div>

        <Link
              to={"/"}
              className="mt-10 px-4 py-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-extrabold rounded-full shadow-lg shadow-violet-900/40 cursor-pointer hover:from-violet-400 hover:to-indigo-400 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-violet-500/30 uppercase tracking-wider"
            >
              
              Continue Shopping
            </Link>
            

      </div>

    </div>
    </>
  )
}

export default OrderConfirmation