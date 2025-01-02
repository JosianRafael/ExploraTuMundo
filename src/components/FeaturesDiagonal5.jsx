import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";

export const FeaturesDiagonal5 = () => {
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

      {/* Section Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-screen-xl flex flex-col items-center justify-center bg-bgDark1 py-12 lg:py-24 px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="block-subtitle text-primary">Explora la Música</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title text-white">
              Podcasts y Documentales sobre Música
            </h2>
            <p className="mb-12 text-secondaryText leading-loose max-w-2xl mx-auto text-lg">
              Adéntrate en el universo musical con una colección curada de podcasts y mini documentales que exploran géneros, artistas y álbumes que han dejado huella en la historia de la música. ¡Escucha, aprende y disfruta!
            </p>
          </div>

          {/* Grid of Podcasts and Documentaries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
            {/* Podcast/Documental Item 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">El MEJOR podcast de MÚSICA de la HISTORIA de Youtube ft. @MatiasParkman</h3>
              <p className="text-sm text-secondaryText mb-4">
              El video "El MEJOR podcast de MÚSICA de la HISTORIA de Youtube ft. @MatiasParkman" es un podcast destacado en el ámbito musical, presentado por Matías Parkman, conocido por su trabajo en la música y su habilidad para generar contenido interesante y atractivo.
              </p>
              <iframe
                width="280"
                height="160"
                src="https://www.youtube.com/embed/hyI9xkQZb44"
                title="Song Exploder Podcast"
                className="rounded-md main-border-gray"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Podcast/Documental Item 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">THE ROCKSTAR SHOW By Nicky Jam 🤟🏽 - Arcangel | Capítulo 5 - T1</h3>
              <p className="text-sm text-secondaryText mb-4">
              El video "THE ROCKSTAR SHOW By Nicky Jam 🤟🏽 - Arcangel | Capítulo 5 - T1" es un episodio de una serie de entrevistas conducida por el famoso cantante y reggaetonero Nicky Jam. En este episodio, Nicky Jam entrevista a Arcangel, un reconocido artista del género urbano.
              </p>
              <iframe
                width="280"
                height="160"
                src="https://www.youtube.com/embed/ZMVfrmLDTLc"
                title="The Defiant Ones Mini Documental"
                className="rounded-md main-border-gray"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Podcast/Documental Item 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Daddy Yankee decide contarlo TODO en su ultima entrevista antes de su retiro</h3>
              <p className="text-sm text-secondaryText mb-4">
              El video "Daddy Yankee decide contarlo TODO en su última entrevista antes de su retiro" presenta una entrevista exclusiva con Daddy Yankee, en la que el famoso reggaetonero comparte detalles íntimos y reveladores sobre su vida y carrera.
              </p>
              <iframe
                width="280"
                height="160"
                src="https://www.youtube.com/embed/8qj-hHvGZpU"
                title="Hip-Hop Evolution Mini Documental"
                className="rounded-md main-border-gray"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Podcast/Documental Item 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">MON LAFERTE, talentosa, AUTÉNTICA y aguerrida | La entrevista con Yordi Rosado</h3>
              <p className="text-sm text-secondaryText mb-4">
              l video "MON LAFERTE, talentosa, AUTÉNTICA y aguerrida | La entrevista con Yordi Rosado" presenta una conversación profunda y reveladora con Mon Laferte, una destacada cantante y compositora chilena conocida por su versatilidad musical y su presencia magnética en el escenario.
              </p>
              <iframe
                width="280"
                height="160"
                src="https://www.youtube.com/embed/sDLePeyC6L8
"
                title="Dissect Podcast"
                className="rounded-md main-border-gray"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Podcast/Documental Item 5 */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">EL NEGOCIO DE LA MÚSICA - ANDRÉS CEPEDA - DEMENTES PODCAST 239</h3>
              <p className="text-sm text-secondaryText mb-4">
              El video "EL NEGOCIO DE LA MÚSICA - ANDRÉS CEPEDA - DEMENTES PODCAST 239" presenta una conversación con Andrés Cepeda, un reconocido cantautor colombiano, en el podcast "Dementes". Este episodio aborda diversos aspectos relacionados con la industria musical y el negocio detrás de ella.
              </p>
              <iframe
                width="280"
                height="160"
                src="https://www.youtube.com/embed/UNT1LdtcjNU"
                title="20 Feet from Stardom Mini Documental"
                className="rounded-md main-border-gray"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Podcast/Documental Item 6 */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">TEKASHI 6IX9INE - RESPUESTA A YAILIN LA MAS VIRAL FT LENIER</h3>
              <p className="text-sm text-secondaryText mb-4">
              Contenido en el que Tekashi 6ix9ine responde a comentarios o situaciones relacionadas con Yailin La Más Viral, posiblemente en el contexto de una disputa o controversia. Lenier es un artista que podría estar colaborando en la respuesta o proporcionando su perspectiva sobre el asunto.

Tekashi 6ix9ine, conocido por su estilo provocador y sus controversias públicas, a menudo utiliza sus redes sociales y plataformas de video para abordar y responder a temas de interés y disputas en la industria musical.
              </p>
              <iframe
                width="280"
                height="160"
                src="https://www.youtube.com/embed/WKLrC9Z7JTY"
                title="20 Feet from Stardom Mini Documental"
                className="rounded-md main-border-gray"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Podcast/Documental Item 7 */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Como funciona el negocio de la musica para los productores? - Podcast entre productores</h3>
              <p className="text-sm text-secondaryText mb-4">
              Roles y Responsabilidades: Diferentes roles en la industria musical, como productores, ingenieros de sonido, y ejecutivos de discográficas.
Modelos de Negocio: Cómo los productores ganan dinero, incluyendo tarifas de producción, regalías, y acuerdos contractuales.
 Finanzas y Contratos
Acuerdos de Producción: Cómo se negocian los contratos de producción y qué términos son importantes (p. ej., regalías, derechos de autor).
Presupuestos: Cómo se manejan los presupuestos de producción y qué costos están involucrados (estudio, artistas, músicos de sesión).
              </p>
              <iframe
                width="280"
                height="160"
                src="https://www.youtube.com/embed/imynnDWwMaI"
                title="20 Feet from Stardom Mini Documental"
                className="rounded-md main-border-gray"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Podcast/Documental Item 8 */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">¿Cómo llevar tu Música a la Radio? | El Podcast de los Famosos</h3>
              <p className="text-sm text-secondaryText mb-4">
              El podcast titulado "¿Cómo llevar tu Música a la Radio? | El Podcast de los Famosos" generalmente aborda temas clave para artistas y productores musicales que desean que su música sea reproducida en estaciones de radio.
              </p>
              <iframe
                width="280"
                height="160"
                src="https://www.youtube.com/embed/BoF4kkU2H6g"
                title="20 Feet from Stardom Mini Documental"
                className="rounded-md main-border-gray"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Podcast/Documental Item 9 */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">La CLAVE para que vean tus VIDEOS </h3>
              <p className="text-sm text-secondaryText mb-4">
              La clave para que tus videos sean vistos y alcancen una mayor audiencia en plataformas como YouTube implica una combinación de estrategias de optimización, promoción y compromiso. 
              </p>
              <iframe
                width="280"
                height="160"
                src="https://www.youtube.com/embed/o206fltDQdM"
                title="20 Feet from Stardom Mini Documental"
                className="rounded-md main-border-gray"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
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
