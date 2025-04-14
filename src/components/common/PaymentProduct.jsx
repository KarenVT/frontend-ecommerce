import React from 'react'
import { useCart } from '../../context/CartContext';

const PaymentProduct = () => {
  const { cartItems, getCartTotal } = useCart();
  
  return (
    <div className="space-y-6 flex flex-col w-full max-w-2xl h-[700px] px-8 p-30">
      <h2 className="text-2xl font-semibold text-gray-300">Pagar a</h2>
      <p className="text-4xl font-bold text-black">{getCartTotal().toFixed(2)} US$</p>
      
      <div className="space-y-4 overflow-y-auto">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">No hay productos en el carrito</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="flex items-start gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain rounded"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
                <div className="flex justify-between mt-1">
                  <p className="text-sm text-gray-800">{item.price}</p>
                  <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default PaymentProduct