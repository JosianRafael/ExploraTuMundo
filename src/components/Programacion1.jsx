import { useState } from "react";
import { motion } from "framer-motion";

export const Programacion1 = () => {
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

      {/* Programming Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-screen-xl flex flex-col items-center justify-center bg-bgDark1 py-12 lg:py-24 px-6 mx-auto"
      >
        <div className="text-center mb-16">
          <span className="block-subtitle text-primary">Descubre la Programación</span>
          <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title text-white">
            Introducción a la Programación
          </h2>
          <p className="mb-12 text-secondaryText leading-loose max-w-2xl mx-auto text-lg">
            La programación es el proceso de crear instrucciones que una computadora sigue para realizar tareas específicas. Desde el desarrollo de aplicaciones web hasta la creación de algoritmos complejos, la programación es una habilidad esencial en el mundo moderno. Explora diferentes lenguajes, paradigmas y herramientas para encontrar el enfoque que mejor se adapte a tus necesidades y objetivos.
          </p>
        </div>

        {/* Grid of Programming Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
          {/* Programming Language 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Introducción a Python</h3>
            <p className="text-sm text-secondaryText mb-4">
              Python es un lenguaje de programación fácil de aprender y usar, ideal para principiantes. Su sintaxis clara y su gran comunidad de apoyo lo convierten en una excelente opción para comenzar a programar.
            </p>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/sugvnHA7ElY"
              title="Introducción a Python"
              className="rounded-md main-border-gray"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Programming Language 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Aprende JavaScript</h3>
            <p className="text-sm text-secondaryText mb-4">
              JavaScript es el lenguaje de programación fundamental para el desarrollo web. Aprende a crear sitios web interactivos y dinámicos con este poderoso lenguaje.
            </p>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/QoC4RxNIs5M"
              title="Aprende JavaScript"
              className="rounded-md main-border-gray"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Programming Language 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Fundamentos de C++</h3>
            <p className="text-sm text-secondaryText mb-4">
              C++ es un lenguaje de programación potente que se utiliza en el desarrollo de software de sistemas y aplicaciones de alto rendimiento. Descubre sus fundamentos y comienza a programar en C++.
            </p>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/8jLOx1hD3_o"
              title="Fundamentos de C++"
              className="rounded-md main-border-gray"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Framework 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">React</h3>
            <p className="text-sm text-secondaryText mb-4">
              React es una biblioteca de JavaScript para construir interfaces de usuario. Utiliza componentes reutilizables para crear aplicaciones web interactivas y rápidas.
            </p>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/7iobxzd_2wY"
              title="Introducción a React"
              className="rounded-md main-border-gray"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Framework 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Angular</h3>
            <p className="text-sm text-secondaryText mb-4">
              Angular es un framework de JavaScript para crear aplicaciones web dinámicas y de una sola página. Ofrece una estructura robusta para desarrollar aplicaciones de gran escala.
            </p>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/f7unUpshmpA"
              title="Introducción a Angular"
              className="rounded-md main-border-gray"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Framework 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Vue.js</h3>
            <p className="text-sm text-secondaryText mb-4">
              Vue.js es un framework progresivo para construir interfaces de usuario. Es flexible y puede integrarse con otros proyectos y bibliotecas.
            </p>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/AqesL138vMA"
              title="Introducción a Vue.js"
              className="rounded-md main-border-gray"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Library 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Lodash</h3>
            <p className="text-sm text-secondaryText mb-4">
              Lodash es una biblioteca de utilidades para JavaScript que facilita el trabajo con arrays, objetos y funciones, proporcionando herramientas para manipulación y transformación de datos.
            </p>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/yswr0G3kK14"
              title="Introducción a Lodash"
              className="rounded-md main-border-gray"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Library 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Axios</h3>
            <p className="text-sm text-secondaryText mb-4">
              Axios es una biblioteca para hacer solicitudes HTTP en JavaScript. Es una herramienta poderosa para interactuar con APIs y manejar datos en aplicaciones web.
            </p>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/BTUSw5AH4qA"
              title="Introducción a Axios"
              className="rounded-md main-border-gray"
              allow="accelerometer; autoplay; clipboard
                          -write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Library 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Moment.js</h3>
            <p className="text-sm text-secondaryText mb-4">
              Moment.js es una biblioteca para el manejo y manipulación de fechas en JavaScript. Facilita la realización de tareas como el formato de fechas y la comparación de fechas.
            </p>
            <iframe
              width="280"
              height="160"
              src="https://www.youtube.com/embed/QRq8-6SDUdUs"
              title="Introducción a Moment.js"
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

