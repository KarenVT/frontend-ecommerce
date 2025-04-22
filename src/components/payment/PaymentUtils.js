/**
 * Funciones de utilidad para la validación de pagos
 */

/**
 * Validar tarjeta de crédito
 * @param {Object} formData - Datos del formulario
 * @returns {string|null} Mensaje de error o null si es válido
 */
export const validateCard = (formData) => {
  // Simulación de validaciones básicas
  if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, "").length < 16) {
    return "Número de tarjeta inválido";
  }
  if (!formData.cardExpiry || !formData.cardExpiry.includes("/")) {
    return "Fecha de expiración inválida";
  }
  if (!formData.cardCVC || formData.cardCVC.length < 3) {
    return "CVC inválido";
  }
  if (!formData.cardHolder) {
    return "Nombre del titular requerido";
  }
  return null;
};

/**
 * Validar datos de PayPal
 * @param {Object} formData - Datos del formulario
 * @returns {string|null} Mensaje de error o null si es válido
 */
export const validatePayPal = (formData) => {
  if (!formData.email) {
    return "Email requerido para pago con PayPal";
  }
  return null;
}; 