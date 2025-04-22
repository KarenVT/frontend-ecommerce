const PaymentSuccess = ({ receipt, goToHome }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-green-100 rounded-full p-4 mb-4">
        <svg className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">¡Pago exitoso!</h2>
      <p className="text-gray-500 mb-6">Su pago ha sido procesado correctamente.</p>
      
      {receipt && (
        <div className="bg-gray-50 rounded-lg p-6 mb-6 w-full max-w-md border border-gray-200">
          <h3 className="font-semibold text-lg mb-3 text-gray-800">Recibo de Compra</h3>
          <div className="space-y-2">
            <p className="flex justify-between text-sm">
              <span className="text-gray-600">ID de recibo:</span>
              <span className="font-medium">{receipt.receiptId}</span>
            </p>
            <p className="flex justify-between text-sm">
              <span className="text-gray-600">ID de transacción:</span>
              <span className="font-medium">{receipt.transactionId}</span>
            </p>
            <p className="flex justify-between text-sm">
              <span className="text-gray-600">Fecha:</span>
              <span className="font-medium">{new Date(receipt.date).toLocaleString()}</span>
            </p>
            <p className="flex justify-between text-sm">
              <span className="text-gray-600">Método de pago:</span>
              <span className="font-medium capitalize">
                {receipt.paymentMethod === "card" ? "Tarjeta" : "PayPal"}
              </span>
            </p>
            <p className="flex justify-between text-sm">
              <span className="text-gray-600">Detalles:</span>
              <span className="font-medium">{receipt.paymentDetails}</span>
            </p>
            <p className="flex justify-between text-sm border-t border-gray-200 pt-2 mt-2">
              <span className="text-gray-800 font-semibold">Total:</span>
              <span className="font-bold">{receipt.amount.toFixed(2)} US$</span>
            </p>
          </div>
        </div>
      )}
      
      <button 
        onClick={goToHome}
        className="bg-orange-500 text-white font-semibold py-3 px-6 rounded hover:bg-orange-600 transition"
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default PaymentSuccess; 