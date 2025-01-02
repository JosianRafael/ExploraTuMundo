import { useState } from "react";
import { motion } from "framer-motion";

export const FinanzasDigitales = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1">
      {/* Top divider */}
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>

      {/* Finanzas Digitales Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-screen-xl flex flex-col items-center justify-center bg-bgDark1 py-12 lg:py-24 px-6 mx-auto"
      >
        <div className="text-center mb-16">
          <span className="block-subtitle text-primary">Explora Finanzas Digitales</span>
          <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title text-white">
            Introducción a las Finanzas Digitales
          </h2>
          <p className="mb-12 text-secondaryText leading-loose max-w-2xl mx-auto text-lg">
            Las finanzas digitales están transformando el mundo de las inversiones y el manejo del dinero. Desde criptomonedas hasta tecnología blockchain, las herramientas digitales ofrecen nuevas formas de gestionar y crecer el capital. Explora cómo estas innovaciones están cambiando el panorama financiero y aprende sobre las principales plataformas y tecnologías que están liderando esta revolución.
          </p>
        </div>

        {/* Grid of Financial Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
          {/* Financial Resource 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Introducción a Bitcoin</h3>
            <p className="text-sm text-secondaryText mb-4">
              Bitcoin es la primera criptomoneda y ha revolucionado el concepto de dinero digital. Aprende los fundamentos de Bitcoin y su impacto en las finanzas globales.
            </p>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/dsTDTa1aP7M"
              title="Introducción a Bitcoin"
              className="rounded-md main-border-gray"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Financial Resource 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Blockchain Explicado</h3>
            <p className="text-sm text-secondaryText mb-4">
              La tecnología blockchain es la base de muchas criptomonedas y ofrece una forma segura y transparente de registrar transacciones. Descubre cómo funciona y sus aplicaciones más allá de las criptomonedas.
            </p>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/Yn8WGaO__ak"
              title="Blockchain Explicado"
              className="rounded-md main-border-gray"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Financial Resource 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Plataformas de Inversión Digital</h3>
            <p className="text-sm text-secondaryText mb-4">
              Explora las principales plataformas de inversión digital y cómo han facilitado el acceso a mercados globales. Aprende sobre las diferencias entre las plataformas y cómo elegir la adecuada para tus objetivos financieros.
            </p>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/EkGSlDW-WOQ"
              title="Plataformas de Inversión Digital"
              className="rounded-md main-border-gray"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.div>

      {/* Bottom Divider */}
      <div className="shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2 fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
