import { FaCreditCard } from "react-icons/fa";

// Este componente es la sección de pago de la página web.
const payment = () => {
  return (
    <div className="flex justify-center py-10 gap-12">
      {/* Producto prueba */}
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

      <div className="p-8 w-full max-w-md h-[700px] flex flex-col gap-10 ">
        <h2 className="text-xl font-semibold text-gray-700">
          Información de contacto
        </h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Método de pago
          </h3>
          <div className="bg-white border border-gray-300 rounded p-4 space-y-4">
            <div className="flex gap-2 flex-row items-center">
              <input id="tarjeta" type="radio" className="rounded w-4 h-4"  />
              <label htmlFor="tarjeta" className="flex items-center gap-2 cursor-pointer">
                <FaCreditCard />
              <span className="text-black font-medium">Tarjeta</span>
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="1234 1234 1234 1234"
                className="w-full border border-gray-200 rounded px-3 py-2"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM / AA"
                className="w-1/2 border border-gray-200 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-1/2 border border-gray-200 rounded px-3 py-2"
              />
            </div>
            <input
              type="text"
              placeholder="Nombre del titular de la tarjeta"
              className="w-full border border-gray-200 rounded px-3 py-2"
            />
            <select className="w-full border border-gray-200 rounded px-3 py-2">
              <option>Colombia</option>
              <option>México</option>
              <option>Argentina</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded hover:bg-orange-600 transition">
          Pagar
        </button>
      </div>
    </div>
  );
};

export default payment;
