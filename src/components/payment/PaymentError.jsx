const PaymentError = ({ paymentError, resetPayment }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-red-100 rounded-full p-4 mb-4">
        <svg className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Error en el pago</h2>
      <p className="text-red-500 mb-6">{paymentError}</p>
      <button 
        onClick={resetPayment}
        className="bg-orange-500 text-white font-semibold py-3 px-6 rounded hover:bg-orange-600 transition"
      >
        Intentar nuevamente
      </button>
    </div>
  );
};

export default PaymentError; 