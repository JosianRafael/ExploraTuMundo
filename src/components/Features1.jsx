import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0    md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">Inovación</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              ¿Sobre qué trata la página?
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
              Una plataforma interactiva y personalizada que combina aprendizaje, entretenimiento y descubrimiento. La página se basaría en ofrecer contenido personalizado según los intereses del usuario, utilizando una mezcla de tecnologías como inteligencia artificial, visualizaciones interactivas y gamificación. 
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Explorador de Temas Personalizado</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Visualización Interactiva del Conocimiento</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Contenido Original y Colaboraciones</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.oQKLBtrlYf6kUlOm6e1P8AHaEo&pid=Api&P=0&h=220"
                  alt="Feature image 1"
                  className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                  aria-label="Feature image 1"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/000/635/356/original/financial-investments-concept-business-assistant-vector-illustration.jpg"
                  alt="Feature image 2"
                  className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                  aria-label="Feature image 2"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.4IUOfRvr1zXtWq3OtNjnuAHaEK&pid=Api&P=0&h=220"
                  alt="Feature image 3"
                  className="rounded-xl  main-border-gray"
                  aria-label="Feature image 3"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.IEEbakBrlqDi8yI_jmsKqAHaEe&pid=Api&P=0&h=220"
                  alt="Feature image 4"
                  className="rounded-xl  main-border-gray"
                  aria-label="Feature image 4"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
