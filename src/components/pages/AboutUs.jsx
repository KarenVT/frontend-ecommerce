import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { LuPackageCheck } from "react-icons/lu";
import Underline from "../common/Underline";
import Laptop from "../../assets/images/laptop2.png";

// Componente de la sección "Sobre Nosotros"
const AboutUs = () => {
  return (
    <section className="w-full flex flex-col items-center px-6 md:px-20 pt-12 md:pt-40 pb-10 bg-white">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-wide">
            Sobre Nosotros
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Somos apasionados por la tecnología y la innovación. Nos
            especializamos en la venta de productos tecnológicos de alta
            calidad, ofreciendo las mejores marcas y las últimas tendencias del
            mercado.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Nuestro compromiso es brindarte una experiencia de compra segura,
            rápida y confiable, con un servicio al cliente excepcional. Ya sea
            que busques equipos de computación, accesorios o dispositivos
            inteligentes, aquí encontrarás lo que necesitas para potenciar tu
            mundo digital.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Únete a nuestra comunidad y descubre el futuro de la tecnología con
            nosotros. 🚀
          </p>
        </div>

        {/* Sección de Imagen */}
        <div className=" hidden md:block w-full">
          <img src={Laptop} alt="Laptop" className="rounded-r-lg" />
        </div>
      </div>

      {/* Línea divisora */}
      <Underline />

      {/* Sección de Beneficios */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-10 text-center">
        <div className="flex flex-col items-center gap-2">
          <TbTruckDelivery className="text-button1 w-16 h-16" />
          <h3 className="text-lg font-semibold">Envíos Nacionales</h3>
          <p className="text-gray-500 text-sm">Envío a toda Colombia</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <LuPackageCheck className="text-button1 w-16 h-16" />
          <h3 className="text-lg font-semibold">Garantía</h3>
          <p className="text-gray-500 text-sm">Directamente con la tienda</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <RiSecurePaymentFill className="text-button1 w-16 h-16" />
          <h3 className="text-lg font-semibold">Pagos Seguros</h3>
          <p className="text-gray-500 text-sm">Medios de pagos seguros</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
