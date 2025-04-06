import Phone from "../../assets/images/Phone.png";

// Este componente es el banner principal de la página de inicio. Contiene un mensaje de bienvenida y una imagen de un teléfono.
const Banner = () => {
  return (
    <section className="px-3 py-5 bg-hover1 lg:py-10">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold md:text-7xl text-secondary">
            ¡Bienvenido!
          </p>
          <p className="text-4xl font-bold md:text-6xl">
            Tecnología al mejor precio
          </p>
          <p className="mt-2 text-sm md:text-lg">
            ¡Aprovecha antes de que acabe!
          </p>
          <button
            href="#seccion-destino"
            className="text-lg md:text-xl bg-text2 text-white py-2 px-5 mt-10 hover:bg-hover2 rounded-lg"
          >
            Ver Catálogo
          </button>
        </div>
        <div className="order-1 lg:order-2">
          <img
            className="h-80 w-80 object-cover lg:w-full lg:h-[500px] rounded-lg"
            src={Phone}
            alt="Phone"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
