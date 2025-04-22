import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { processCardPayment, processPayPalPayment, generateReceipt } from "../../services/paymentService";
import { validateCard, validatePayPal } from "./PaymentUtils";
import PaymentForm from "./PaymentForm";
import PaymentProcessing from "./PaymentProcessing";
import PaymentSuccess from "./PaymentSuccess";
import PaymentError from "./PaymentError";
import PaymentProduct from "../common/PaymentProduct";

const PaymentContainer = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  // Estados para el proceso de pago
  const [paymentStatus, setPaymentStatus] = useState("initial"); // initial, processing, success, error
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [paymentError, setPaymentError] = useState("");
  const [receipt, setReceipt] = useState(null);
  
  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
    cardHolder: "",
    country: "Colombia"
  });
  
  // Procesar pago
  const processPayment = (e) => {
    e.preventDefault();
    
    // Validar campos antes de procesar
    let error = null;
    if (paymentMethod === "card") {
      error = validateCard(formData);
    } else {
      error = validatePayPal(formData);
    }
    
    if (error) {
      setPaymentError(error);
      return;
    }
    
    // Limpiar errores previos
    setPaymentError("");
    setPaymentStatus("processing");
    
    // Simulación de procesamiento de pago utilizando el servicio
    const amount = getCartTotal();
    
    if (paymentMethod === "card") {
      processCardPayment(
        {
          cardNumber: formData.cardNumber,
          cardExpiry: formData.cardExpiry,
          cardCVC: formData.cardCVC,
          cardHolder: formData.cardHolder
        },
        amount
      )
        .then(result => {
          const receiptData = generateReceipt(result);
          setReceipt(receiptData);
          setPaymentStatus("success");
          // Limpiar carrito después de un pago exitoso
          setTimeout(() => {
            clearCart();
          }, 2000);
        })
        .catch(error => {
          setPaymentStatus("error");
          setPaymentError(error.error || "Error al procesar el pago. Intente nuevamente.");
        });
    } else {
      // Procesamiento de PayPal
      processPayPalPayment(formData.email, amount)
        .then(result => {
          const receiptData = generateReceipt(result);
          setReceipt(receiptData);
          setPaymentStatus("success");
          // Limpiar carrito después de un pago exitoso
          setTimeout(() => {
            clearCart();
          }, 2000);
        })
        .catch(error => {
          setPaymentStatus("error");
          setPaymentError(error.error || "Error al procesar el pago con PayPal. Intente nuevamente.");
        });
    }
  };
  
  // Regresar al estado inicial
  const resetPayment = () => {
    setPaymentStatus("initial");
    setPaymentError("");
  };
  
  // Redirigir al inicio después de un pago exitoso
  const goToHome = () => {
    navigate("/");
  };
  
  // Renderizado condicional basado en el estado del pago
  const renderPaymentContent = () => {
    switch (paymentStatus) {
      case "processing":
        return <PaymentProcessing />;
        
      case "success":
        return <PaymentSuccess receipt={receipt} goToHome={goToHome} />;
        
      case "error":
        return <PaymentError paymentError={paymentError} resetPayment={resetPayment} />;
        
      default: // initial
        return (
          <div className="flex justify-center py-10 gap-12">
            <PaymentProduct />  
            <PaymentForm 
              formData={formData} 
              setFormData={setFormData}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              paymentError={paymentError}
              handleSubmit={processPayment}
              cartItems={cartItems}
              getCartTotal={getCartTotal}
            />
          </div>
        );
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {renderPaymentContent()}
    </div>
  );
};

export default PaymentContainer; 