/**
 * Servicio de simulación de pago para la aplicación de e-commerce
 * Proporciona funciones para procesar diferentes tipos de pagos
 */

/**
 * Simula el procesamiento de un pago con tarjeta de crédito
 * @param {Object} cardDetails - Detalles de la tarjeta
 * @param {number} amount - Monto a pagar
 * @returns {Promise} Promesa que resuelve a un objeto de resultado de transacción
 */
export const processCardPayment = (cardDetails, amount) => {
  return new Promise((resolve, reject) => {
    // Validación básica de los datos de la tarjeta
    if (!cardDetails.cardNumber || !cardDetails.cardExpiry || !cardDetails.cardCVC) {
      return reject({
        success: false,
        error: "Información de tarjeta incompleta",
        errorCode: "INVALID_CARD"
      });
    }
    
    // Simulación de tiempo de procesamiento (1-3 segundos)
    const processingTime = 1000 + Math.random() * 2000;
    
    setTimeout(() => {
      // Simulación de éxito/error: 90% de los pagos son exitosos
      const isSuccessful = Math.random() < 0.9;
      
      if (isSuccessful) {
        resolve({
          success: true,
          transactionId: `TX-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
          amount: amount,
          timestamp: new Date().toISOString(),
          paymentMethod: "card",
          last4: cardDetails.cardNumber.slice(-4)
        });
      } else {
        // Simulación de varios tipos de errores
        const errors = [
          { code: "INSUFFICIENT_FUNDS", message: "Fondos insuficientes" },
          { code: "CARD_DECLINED", message: "Tarjeta rechazada" },
          { code: "NETWORK_ERROR", message: "Error de comunicación con el banco" }
        ];
        
        const randomError = errors[Math.floor(Math.random() * errors.length)];
        
        reject({
          success: false,
          error: randomError.message,
          errorCode: randomError.code
        });
      }
    }, processingTime);
  });
};

/**
 * Simula el procesamiento de un pago con PayPal
 * @param {string} email - Email asociado a la cuenta de PayPal
 * @param {number} amount - Monto a pagar
 * @returns {Promise} Promesa que resuelve a un objeto de resultado de transacción
 */
export const processPayPalPayment = (email, amount) => {
  return new Promise((resolve, reject) => {
    if (!email) {
      return reject({
        success: false,
        error: "Email requerido",
        errorCode: "INVALID_EMAIL"
      });
    }
    
    // Simulación de tiempo de procesamiento (1-2 segundos)
    const processingTime = 1000 + Math.random() * 1000;
    
    setTimeout(() => {
      // Simulación de éxito/error: 95% de los pagos son exitosos
      const isSuccessful = Math.random() < 0.95;
      
      if (isSuccessful) {
        resolve({
          success: true,
          transactionId: `PP-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
          amount: amount,
          timestamp: new Date().toISOString(),
          paymentMethod: "paypal",
          email: email
        });
      } else {
        reject({
          success: false,
          error: "Error al procesar el pago con PayPal",
          errorCode: "PAYPAL_ERROR"
        });
      }
    }, processingTime);
  });
};

/**
 * Genera un recibo para un pago exitoso
 * @param {Object} paymentResult - Resultado de la transacción
 * @returns {Object} Datos del recibo
 */
export const generateReceipt = (paymentResult) => {
  return {
    receiptId: `REC-${Date.now()}`,
    transactionId: paymentResult.transactionId,
    date: new Date().toISOString(),
    amount: paymentResult.amount,
    paymentMethod: paymentResult.paymentMethod,
    paymentDetails: paymentResult.paymentMethod === "card" 
      ? `**** **** **** ${paymentResult.last4}`
      : paymentResult.email
  };
}; 