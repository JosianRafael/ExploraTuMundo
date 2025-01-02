import { useState } from "react";
import { motion } from "framer-motion";

export const FeaturesDiagonal4 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

  const questions = [
    { question: "¿Cuál es el álbum más reciente de Taylor Swift?", options: ["Lover", "Folklore", "Evermore", "Midnights"], answer: "Midnights" },
    { question: "¿Quién colaboró con Drake en la canción 'In My Feelings'?", options: ["Lil Wayne", "Future", "The Weeknd", "Travis Scott"], answer: "Future" },
    { question: "¿Qué canción de Adele ganó el Grammy al Álbum del Año en 2024?", options: ["Hello", "Someone Like You", "Rolling in the Deep", "30"], answer: "30" },
    { question: "¿En qué año se lanzó el álbum 'Thriller' de Michael Jackson?", options: ["1982", "1984", "1986", "1988"], answer: "1982" },
    { question: "¿Cuál es el nombre real de la artista conocida como Lady Gaga?", options: ["Stefani Germanotta", "Stefani Joanne Angelina Germanotta", "Stephanie Germanotta", "Gaga Stephanie"], answer: "Stefani Joanne Angelina Germanotta" },
    { question: "¿Qué banda británica lanzó el álbum 'A Night at the Opera' en 1975?", options: ["The Rolling Stones", "Queen", "The Beatles", "Led Zeppelin"], answer: "Queen" },
    { question: "¿Qué canción de Luis Fonsi y Daddy Yankee se convirtió en un éxito mundial en 2017?", options: ["Despacito", "Échame la Culpa", "Vivir Mi Vida", "Dákiti"], answer: "Despacito" },
    { question: "¿Cuál fue el primer álbum de estudio de The Beatles?", options: ["Please Please Me", "With The Beatles", "A Hard Day's Night", "Beatles for Sale"], answer: "Please Please Me" },
    { question: "¿Qué artista ganó el Grammy al Mejor Artista Nuevo en 2023?", options: ["Billie Eilish", "Olivia Rodrigo", "Megan Thee Stallion", "Phoebe Bridgers"], answer: "Olivia Rodrigo" },
    { question: "¿Qué género musical es conocido por su ritmo rápido y sus letras enérgicas, como el punk rock?", options: ["Punk", "Metal", "Jazz", "Blues"], answer: "Punk" },
    { question: "¿Cuál es el nombre del famoso festival de música celebrado en California cada verano?", options: ["Coachella", "Lollapalooza", "Glastonbury", "Bonnaroo"], answer: "Coachella" },
    { question: "¿Qué canción de Whitney Houston fue el tema principal de la película 'The Bodyguard'?", options: ["I Will Always Love You", "Greatest Love of All", "How Will I Know", "I Wanna Dance with Somebody"], answer: "I Will Always Love You" },
    { question: "¿Qué famoso guitarrista fue conocido por su habilidad con la guitarra de 12 cuerdas y su estilo innovador?", options: ["Jimi Hendrix", "Eric Clapton", "Jimmy Page", "Tommy Emmanuel"], answer: "Tommy Emmanuel" },
    { question: "¿En qué año se fundó la banda de rock Led Zeppelin?", options: ["1968", "1969", "1970", "1971"], answer: "1968" },
    { question: "¿Cuál es el nombre del álbum debut de Beyoncé como solista?", options: ["Dangerously in Love", "B'Day", "I Am... Sasha Fierce", "4"], answer: "Dangerously in Love" },
    { question: "¿Qué famosa banda de grunge tuvo su álbum debut titulado 'Bleach' en 1989?", options: ["Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains"], answer: "Nirvana" },
  ];

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const calculateScore = () => {
    return userAnswers.filter((answer, index) => answer === questions[index].answer).length;
  };

  const handleCommentSubmit = () => {
    if (name && commentText) {
      setComments([...comments, { name, text: commentText }]);
      setName("");
      setCommentText("");
    }
  };

  return (
    <section className="lg:mb-6 p-8 w-full flex flex-col justify-center items-center bg-bgDark1">
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex flex-col justify-center bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto">
          {!quizCompleted ? (
            <div className="w-full flex flex-col items-center">
              <h3 className="text-4xl lg:text-5xl block-big-title mb-9 text-center">"Desafío Musical: ¿Cuánto Sabes Sobre <br></br>
               Música?"</h3>
              <h2 className="text-3xl text-primaryText mb-8">{questions[currentQuestion].question}</h2>
              <div className="w-full flex flex-col items-center">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="w-3/4 h-12 mb-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center">
              <h2 className="text-4xl lg:text-5xl block-big-title mb-8">¡Quiz Completado!</h2>
              <p className="text-secondaryText leading-loose mb-8">Tu puntuación es: {calculateScore()} de {questions.length}</p>
              <button
                className="w-[210px] h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                onClick={() => {
                  setUserAnswers([]);
                  setCurrentQuestion(0);
                  setQuizCompleted(false);
                }}
                aria-label="Try Again"
              >
                Intentar de nuevo
              </button>
            </div>
          )}
        </div>
      </motion.div>
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
      <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg mt-16">
        <h2 className="text-3xl font-bold text-white mb-6">Deja Recomendaciones sobre la Musica!</h2>
        <div className="mb-6">
          <label htmlFor="name" className="block text-white mb-2">Tu Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="comment" className="block text-white mb-2">Tu Comentario</label>
          <textarea
            id="comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Escribe tu comentario aquí"
          ></textarea>
        </div>
        <button
          className="w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          onClick={handleCommentSubmit}
        >
          Enviar Comentario
        </button>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Comentarios</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="mb-4 p-4 bg-gray-700 rounded-lg">
                <p className="font-semibold text-white">{comment.name}</p>
                <p className="text-gray-300">{comment.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
