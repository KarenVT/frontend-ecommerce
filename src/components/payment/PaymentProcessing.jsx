const PaymentProcessing = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500 mb-4"></div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Procesando pago</h2>
      <p className="text-gray-500">Por favor espere mientras procesamos su pago...</p>
    </div>
  );
};

export default PaymentProcessing; 