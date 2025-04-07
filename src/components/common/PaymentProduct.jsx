import React from 'react'

const PaymentProduct = () => {
  return (
    <div className=" space-y-6 flex flex-col w-full max-w-2xl h-[700px] px-8 p-30 ">
            <h2 className="text-2xl font-semibold text-gray-300">Pagar a</h2>
            <p className="text-4xl font-bold text-black">74.248,00 US$</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <img
                  src=""
                  alt="Acer"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Portátil Acer A315
                  </h3>
                  <p className="text-sm text-gray-600">
                    Intel Core i5, 8 GB RAM, 256 SSD. Ideal para tareas diarias.
                  </p>
                  <p className="text-sm text-gray-800 mt-1">42.000,00 US$</p>
                </div>
              </div>
    
              <div className="flex items-start gap-4">
                <img
                  src=""
                  alt="Asus"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Portátil Asus VivoBook E1504G
                  </h3>
                  <p className="text-sm text-gray-600">
                    AMD Ryzen 5, 8 GB RAM, 256 SSD. Diseño elegante.
                  </p>
                  <p className="text-sm text-gray-800 mt-1">32.248,00 US$</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default PaymentProduct