import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";

export const FeaturesDiagonal3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1">
      <div className="shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2  fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1  fill-bgDark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="2xl:w-[900px] xl:w-[800px] md:w-4/5 flex flex-col justify-center bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto text-center">
          <span className="block-subtitle text-xl text-secondaryText">
            El Arte de la Música
          </span>
          <h2 className="mt-6 mb-6 text-5xl lg:text-6xl block-big-title text-primaryText font-bold">
            Introducción a la Música
          </h2>
          <p className="mb-12 text-lg text-secondaryText leading-relaxed">
            La música es una forma de arte que utiliza los sonidos y silencios organizados en el tiempo. A lo largo de la historia, la música ha sido una poderosa herramienta para la expresión cultural, emocional y social. Desde los antiguos cantos gregorianos hasta los ritmos contemporáneos del pop, la música es un lenguaje universal que une a las personas más allá de fronteras y culturas.
          </p>
        </div>
      </motion.div>
      
      {/* Sección de Noticias y Actualizaciones Musicales */}
      
      <div className="mt-16 mb-12 text-center w-full">
        <h3 className="text-4xl text-primaryText mb-8">Noticias y Actualizaciones Musicales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-6 lg:px-12">
          <div className="bg-bgDark2 rounded-lg p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-2xl text-primaryText font-semibold mb-4">Taylor Swift Anuncia su Tour de 2024</h4>
            <p className="text-secondaryText leading-relaxed">
            Taylor Swift ha revelado las fechas de su esperado tour mundial para 2024. El tour, que promete ser uno de los más grandes de su carrera, incluye conciertos en varias ciudades importantes alrededor del mundo, con la expectativa de grandes actuaciones y sorpresas para los fans.
            </p>
          </div>
          <div className="bg-bgDark2 rounded-lg p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-2xl text-primaryText font-semibold mb-4">Beyoncé Lanza su Nuevo Álbum 'Renaissance' Parte II</h4>
            <p className="text-secondaryText leading-relaxed">
            Beyoncé ha lanzado la segunda parte de su aclamado álbum 'Renaissance'. La nueva entrega promete explorar más a fondo los temas de empoderamiento y autoexpresión que definieron la primera parte del álbum, con colaboraciones emocionantes y sonidos innovadores.
            </p>
          </div>
          <div className="bg-bgDark2 rounded-lg p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-2xl text-primaryText font-semibold mb-4">Billie Eilish Estrena Video Musical para su Nuevo Sencillo 'Lost Cause</h4>
            <p className="text-secondaryText leading-relaxed">
            Billie Eilish ha lanzado el video musical para su nuevo sencillo 'Lost Cause'. El video, que ha sido bien recibido por la crítica y los fans, presenta una estética nostálgica y refrescante, complementando el estilo distintivo de la canción.
            </p>
          </div>
          <div className="bg-bgDark2 rounded-lg p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-2xl text-primaryText font-semibold mb-4">Bad Bunny Rompe Récords con su Nuevo Álbum 'Un Verano Sin Ti'</h4>
            <p className="text-secondaryText leading-relaxed">
            Bad Bunny ha establecido un nuevo récord con su álbum 'Un Verano Sin Ti', que ha dominado las listas de popularidad en múltiples países. El álbum ha sido aclamado por su diversidad musical y su habilidad para fusionar géneros.
            </p>
          </div>
          <div className="bg-bgDark2 rounded-lg p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-2xl text-primaryText font-semibold mb-4">Adele Gana el Premio a Álbum del Año en los Grammy 2024</h4>
            <p className="text-secondaryText leading-relaxed">
            Adele ha sido galardonada con el Premio al Álbum del Año en los Grammy 2024 por su álbum '30'. Este premio destaca su regreso triunfal a la música después de un período de ausencia, con una obra que ha sido ampliamente elogiada por su profundidad emocional.
            </p>
          </div>
          <div className="bg-bgDark2 rounded-lg p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-2xl text-primaryText font-semibold mb-4">Música Clásica: Un Renacimiento Moderno</h4>
            <p className="text-secondaryText leading-relaxed">
              Los conciertos de música clásica están experimentando un resurgimiento, atrayendo a audiencias jóvenes interesadas en obras maestras de siglos pasados.
            </p>
          </div>
          <div className="bg-bgDark2 rounded-lg p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-2xl text-primaryText font-semibold mb-4">Ed Sheeran Anuncia Nuevo Sencillo 'Celestial</h4>
            <p className="text-secondaryText leading-relaxed">
            Ed Sheeran ha anunciado el lanzamiento de su nuevo sencillo 'Celestial'. La canción, que se espera que sea un gran éxito, muestra un estilo melódico característico de Sheeran y promete ser un nuevo favorito entre sus seguidores.
            </p>
          </div>
          <div className="bg-bgDark2 rounded-lg p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-2xl text-primaryText font-semibold mb-4">Kanye West Presenta Su Colección de Moda Inspirada en su Música</h4>
            <p className="text-secondaryText leading-relaxed">
            Kanye West ha presentado una nueva colección de moda que está inspirada en su carrera musical. La colección, que combina elementos de su estilo musical con tendencias de moda actuales, ha sido recibida con entusiasmo tanto por críticos como por fans.
            </p>
          </div>
        </div>
      </div>

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
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
