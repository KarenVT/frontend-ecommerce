import { useState } from "react";
import { FaCreditCard, FaPaypal, FaCcMastercard, FaCcVisa, FaCcAmex } from "react-icons/fa";

const PaymentForm = ({ 
  formData, 
  setFormData, 
  paymentMethod, 
  setPaymentMethod, 
  paymentError, 
  handleSubmit, 
  cartItems, 
  getCartTotal 
}) => {
  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Formatear número de tarjeta mientras se escribe
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || "";
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };
  
  // Formatear fecha de expiración
  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.slice(0, 2) + (v.length > 2 ? "/" + v.slice(2, 4) : "");
    }
    return v;
  };

  return (
    <div className="p-8 w-full max-w-md h-auto flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-gray-700">
        Información de contacto
      </h2>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Correo electrónico"
        className="w-full border border-gray-300 rounded px-4 py-2"
        required
      />

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Método de pago
        </h3>
        <div className="flex gap-4 mb-4">
          <button 
            type="button"
            onClick={() => setPaymentMethod("card")}
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              paymentMethod === "card" ? "bg-orange-100 border border-orange-500" : "bg-gray-100 border border-gray-300"
            }`}
          >
            <FaCreditCard />
            <span>Tarjeta</span>
          </button>
          <button 
            type="button"
            onClick={() => setPaymentMethod("paypal")}
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              paymentMethod === "paypal" ? "bg-orange-100 border border-orange-500" : "bg-gray-100 border border-gray-300"
            }`}
          >
            <FaPaypal />
            <span>PayPal</span>
          </button>
        </div>
        
        {paymentMethod === "card" && (
          <div className="bg-white border border-gray-300 rounded p-4 space-y-4">
            <div className="flex gap-2 justify-end mb-2">
              <FaCcVisa size={24} className="text-blue-700" />
              <FaCcMastercard size={24} className="text-red-600" />
              <FaCcAmex size={24} className="text-blue-500" />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={(e) => setFormData({...formData, cardNumber: formatCardNumber(e.target.value)})}
                placeholder="1234 1234 1234 1234"
                className="w-full border border-gray-200 rounded px-3 py-2"
                maxLength="19"
                required
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={(e) => setFormData({...formData, cardExpiry: formatExpiry(e.target.value)})}
                placeholder="MM / AA"
                className="w-1/2 border border-gray-200 rounded px-3 py-2"
                maxLength="5"
                required
              />
              <input
                type="text"
                name="cardCVC"
                value={formData.cardCVC}
                onChange={handleInputChange}
                placeholder="CVC"
                className="w-1/2 border border-gray-200 rounded px-3 py-2"
                maxLength="4"
                required
              />
            </div>
            <input
              type="text"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleInputChange}
              placeholder="Nombre del titular de la tarjeta"
              className="w-full border border-gray-200 rounded px-3 py-2"
              required
            />
            <select 
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full border border-gray-200 rounded px-3 py-2"
            >
              <option value="Colombia">Colombia</option>
              <option value="México">México</option>
              <option value="Argentina">Argentina</option>
              <option value="Perú">Perú</option>
              <option value="Chile">Chile</option>
            </select>
          </div>
        )}
        
        {paymentMethod === "paypal" && (
          <div className="bg-white border border-gray-300 rounded p-4">
            <p className="text-gray-600 mb-3">Serás redirigido a PayPal para completar tu pago.</p>
            <div className="flex justify-center">
              <FaPaypal size={48} className="text-blue-600" />
            </div>
          </div>
        )}
      </div>
      
      {paymentError && (
        <div className="bg-red-50 border border-red-200 rounded p-3 text-red-500">
          {paymentError}
        </div>
      )}

      <button 
        onClick={handleSubmit}
        disabled={cartItems.length === 0}
        className={`w-full font-semibold py-3 rounded transition ${
          cartItems.length === 0 
            ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
            : "bg-orange-500 text-white hover:bg-orange-600"
        }`}
      >
        {cartItems.length === 0 ? "Carrito vacío" : `Pagar ${getCartTotal().toFixed(2)} US$`}
      </button>
      
      <p className="text-xs text-gray-500 text-center mt-3">
        Esta es una simulación de pago para fines demostrativos. No se realizará ningún cargo real.
      </p>
    </div>
  );
};

export default PaymentForm; 