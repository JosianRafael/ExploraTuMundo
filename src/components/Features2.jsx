import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="w-full bg-bgDark2 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src="https://c8.alamy.com/compes/jpdknj/sintaxis-codigo-fuente-codigo-lenguaje-de-programacion-c-programa-informatica-programacion-captura-de-pantalla-jpdknj.jpg"
                alt="Feature image 5"
                className="rounded-xl  main-border-gray"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.DX7KrqjAF2FpfIDk_JBAGAHaD4&pid=Api&P=0&h=220"
                alt="Feature image 6"
                className="rounded-xl  main-border-gray"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="block-subtitle">Mundo de la programación</span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Sobre el mundo de programación!
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
            Sumérgete en el fascinante mundo de la programación como nunca antes. Desde explorar conceptos clave y dominar lenguajes de código hasta desarrollar proyectos innovadores y resolver desafíos intrigantes, nuestra plataforma está diseñada para llevarte en un viaje de aprendizaje y creatividad sin límites. 
            </p>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Aprende a programar.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Aprendizaje y creatividad sin límites.</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Explorar conceptos clave.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
