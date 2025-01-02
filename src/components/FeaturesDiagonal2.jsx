import { motion } from "framer-motion";
import { useState } from "react";
import { InvitationModal } from "./InvitationModal";

export const FeaturesDiagonal2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [songInfo, setSongInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Lista extendida de países
  const countries = [
    { name: "USA", song: "Blinding Lights", artist: "The Weeknd", description: "A catchy pop hit that topped charts globally." },
    { name: "UK", song: "Watermelon Sugar", artist: "Harry Styles", description: "A refreshing summer anthem with a laid-back vibe." },
    { name: "Japan", song: "Pretender", artist: "Official HIGE DANDism", description: "A heartfelt rock ballad that resonates with listeners." },
    { name: "Brazil", song: "Ai Se Eu Te Pego", artist: "Michel Teló", description: "A famous Brazilian pop song with a catchy rhythm." },
    { name: "Canada", song: "Peaches", artist: "Justin Bieber", description: "A chill R&B track that captures the vibes of California and Georgia." },
    { name: "Australia", song: "Dance Monkey", artist: "Tones and I", description: "A viral pop song with a unique voice and catchy beat." },
    { name: "India", song: "Tum Hi Ho", artist: "Arijit Singh", description: "A romantic Bollywood ballad that became a sensation." },
    { name: "Germany", song: "99 Luftballons", artist: "Nena", description: "A classic German pop song with a strong political message." },
    { name: "France", song: "La Vie en Rose", artist: "Édith Piaf", description: "An iconic French song that has stood the test of time." },
    { name: "Italy", song: "Volare", artist: "Domenico Modugno", description: "A classic Italian song that became popular worldwide." },
    { name: "Mexico", song: "Despacito", artist: "Luis Fonsi", description: "A global hit that brought Latin pop to the mainstream." },
    { name: "Spain", song: "Bailando", artist: "Enrique Iglesias", description: "A dance-pop song that became an international success." },
    { name: "South Korea", song: "Gangnam Style", artist: "PSY", description: "A K-pop sensation that became a worldwide viral hit." },
    { name: "China", song: "Tian Mi Mi", artist: "Teresa Teng", description: "A beloved Chinese song that is nostalgic for many." },
    { name: "Russia", song: "Kalinka", artist: "Russian Folk", description: "A traditional Russian folk song known worldwide." },
    { name: "Argentina", song: "Despacito", artist: "Luis Fonsi", description: "A global hit that brought Latin pop to the mainstream." },
    { name: "South Africa", song: "Jerusalema", artist: "Master KG", description: "An Afro-pop song that became an anthem of unity and hope." },
    { name: "Nigeria", song: "Fall", artist: "Davido", description: "A popular Afrobeat song that topped charts in Africa." },
    { name: "Egypt", song: "El Leila", artist: "Amr Diab", description: "A beloved Arabic pop song that captures Egyptian culture." },
    { name: "Turkey", song: "Simarik", artist: "Tarkan", description: "A Turkish pop song that became a hit across Europe." },
    { name: "Colombia", song: "Hawái", artist: "Maluma", description: "A reggaeton hit that showcases Latin urban music." },
    { name: "Peru", song: "No Existen Técnicas para Olvidar", artist: "Miki González", description: "A classic Peruvian song blending rock with local influences." },
    { name: "Chile", song: "Lucha de Gigantes", artist: "Nacha Pop", description: "An iconic Spanish song that resonates across Latin America." },
    { name: "Venezuela", song: "La Gozadera", artist: "Gente de Zona", description: "A popular Cuban song embraced by Venezuelan audiences." },
    { name: "Sweden", song: "Dancing Queen", artist: "ABBA", description: "A timeless disco classic from the Swedish pop group." },
    { name: "Norway", song: "Take On Me", artist: "a-ha", description: "A famous 80s song known for its iconic music video." },
    { name: "Denmark", song: "7 Years", artist: "Lukas Graham", description: "A touching song about growing up and life's milestones." },
    { name: "Finland", song: "Hard Rock Hallelujah", artist: "Lordi", description: "A Eurovision winner with a unique heavy metal sound." },
    { name: "Netherlands", song: "Venus", artist: "Shocking Blue", description: "A classic rock hit that gained international fame." },
    { name: "Belgium", song: "Alors on Danse", artist: "Stromae", description: "A hit song that blends electronic beats with French lyrics." },
    { name: "Switzerland", song: "Eres Tú", artist: "Mocedades", description: "A romantic ballad that became popular in various languages." },
    { name: "Austria", song: "Rock Me Amadeus", artist: "Falco", description: "A song celebrating the life of Mozart with a modern twist." },
    { name: "Poland", song: "Przez Twe Oczy Zielone", artist: "Akcent", description: "A popular song in the Polish pop-folk genre." },
    { name: "Czech Republic", song: "Cikánka", artist: "Karel Gott", description: "A classic hit by one of the most famous Czech singers." },
    { name: "Slovakia", song: "Voda", artist: "Richard Krajčo", description: "A song known for its emotive lyrics and melodic composition." },
    { name: "Hungary", song: "Tavaszi Szél Vizet Áraszt", artist: "Kati Kovács", description: "A traditional folk song with a deep cultural resonance." },
    { name: "Romania", song: "Dragostea Din Tei", artist: "O-Zone", description: "A catchy pop song that became a global dance hit." },
    { name: "Bulgaria", song: "Kaval Sviri", artist: "Bulgarians", description: "A traditional folk song known for its distinctive sound." },
    { name: "Greece", song: "S'agapo", artist: "Haris Alexiou", description: "A beautiful love song that highlights Greek musical traditions." },
    { name: "Cyprus", song: "Fuego", artist: "Elena Tsagrinou", description: "A high-energy pop song that gained popularity across Europe." },
    { name: "Israel", song: "Toy", artist: "Netta", description: "A Eurovision-winning song known for its empowering message." },
    { name: "Lebanon", song: "Hawel Tefrah", artist: "Nancy Ajram", description: "A popular Arabic pop song with a catchy tune." },
    { name: "Saudi Arabia", song: "Boshret Kheir", artist: "Hany Shaker", description: "A song with a hopeful message and traditional sound." },
    { name: "United Arab Emirates", song: "Aisha", artist: "Khaled", description: "A classic song that blends traditional and modern elements." },
    { name: "Qatar", song: "Ya Hala", artist: "Rashed Al-Majed", description: "A beloved song reflecting Qatari musical heritage." },
    { name: "Oman", song: "Ammar", artist: "Majid Al Mohandis", description: "A romantic ballad with a rich, melodious composition." },
    { name: "Kuwait", song: "Boshret Kheir", artist: "Hany Shaker", description: "A song with a hopeful message and traditional sound." },
    { name: "Jordan", song: "Elli Fi Qalbi", artist: "Diana Haddad", description: "A popular Arabic song known for its emotive lyrics." },
    { name: "Iraq", song: "Habibi Ya Nour El Ain", artist: "Amr Diab", description: "A hit song blending traditional and modern sounds." },
    { name: "Syria", song: "Lamma Bada Yatathanna", artist: "Fairouz", description: "A classic Arabic song with deep cultural significance." },
    { name: "Yemen", song: "Rasheed", artist: "Fahad Al-Kubaisi", description: "A song that showcases Yemeni musical traditions." },
    { name: "Pakistan", song: "Tera Woh Pyar", artist: "Ali Zafar", description: "A popular song with a romantic theme and modern sound." },
    { name: "Bangladesh", song: "Amar Sonar Bangla", artist: "Rabindranath Tagore", description: "A patriotic song that holds a special place in Bangladeshi culture." },
    { name: "Sri Lanka", song: "Sakura Sakura", artist: "Sanjeewa", description: "A song blending traditional Sri Lankan music with modern influences." },
    { name: "Nepal", song: "Sambodhan", artist: "Phiroj Shyangden", description: "A song known for its unique Nepali sound and heartfelt lyrics." },
    { name: "Bhutan", song: "Wangchuck", artist: "Karma Chhophel", description: "A song celebrating Bhutanese culture and traditions." },
    { name: "Maldives", song: "Vaahli", artist: "Masha", description: "A song that reflects the beautiful sounds of Maldivian music." },
    { name: "Brunei", song: "Lagu Kebangsaan", artist: "Brunei Royal Band", description: "The national anthem, reflecting the pride and culture of Brunei." },
    { name: "Singapore", song: "Home", artist: "Kit Chan", description: "A song that has become an anthem of national pride in Singapore." },
    { name: "Malaysia", song: "Sampai Jumpa", artist: "Nashit", description: "A popular song known for its catchy rhythm and melody." },
    { name: "Philippines", song: "Buwan", artist: "Juan Karlos", description: "A hit song blending traditional and modern Filipino music." },
    { name: "Vietnam", song: "Hạ Trắng", artist: "Trịnh Công Sơn", description: "A classic Vietnamese song with a poignant melody." },
    { name: "Laos", song: "Lao Song", artist: "Phongsavanh", description: "A traditional song that showcases Laotian musical heritage." },
    { name: "Cambodia", song: "Kanha", artist: "Serey Vong", description: "A popular Cambodian song with a nostalgic feel." },
    { name: "Myanmar", song: "Nang Mya", artist: "Phoe Lu", description: "A song reflecting the rich musical traditions of Myanmar." },
    { name: "Mongolia", song: "Chinggis Khaan", artist: "Ariunaa", description: "A song celebrating Mongolian history and culture." },
    { name: "Uzbekistan", song: "Gulchehra", artist: "Nodirbek", description: "A traditional Uzbek song with a beautiful melody." },
    { name: "Kazakhstan", song: "Dudarai", artist: "Dimash Kudaibergen", description: "A powerful song with a blend of modern and traditional Kazakh elements." },
    { name: "Turkmenistan", song: "Köwre", artist: "Jora", description: "A traditional Turkmen song with deep cultural roots." },
    { name: "Armenia", song: "Dle Yaman", artist: "Aram Khachaturian", description: "A classical Armenian song with a rich historical background." },
    { name: "Georgia", song: "Suliko", artist: "Bidzina", description: "A traditional Georgian folk song known for its soulful melody." },
    { name: "Azerbaijan", song: "Sari Gelin", artist: "Magsud Ibrahimbeyov", description: "A classic Azerbaijani song with a touching melody." },
  ];

  // Filtra los países según el término de búsqueda
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountryClick = (country) => {
    setSelectedCountry(country.name);
    setSongInfo({
      title: country.song,
      artist: country.artist,
      description: country.description,
    });
  };

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1 py-12 px-6">
      <div className="shape-divider-bottom-1665696614 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="bg-bgDark2  fill-bgDark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="bg-bgDark1 fill-bgDark1"
          ></path>
        </svg>
      </div>

      {/* Título y Descripción */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <h2 className="text-4xl lg:text-5xl text-white mb-6">Explora Canciones por País</h2>
        <p className="mb-8 text-secondaryText leading-loose text-lg max-w-2xl mx-auto">
          Usa el buscador para encontrar un país y descubrir la canción más popular en ese lugar y haz click sobre un país.
        </p>

        {/* Campo de Búsqueda */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar país..."
            className="p-2 rounded-lg border border-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Botones de Países */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {filteredCountries.map((country, index) => (
            <button
              key={index}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
              onClick={() => handleCountryClick(country)}
            >
              {country.name}
            </button>
          ))}
        </div>

        {/* Información de la Canción Seleccionada */}
        {songInfo && (
          <div className="mt-12 p-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-lg text-white max-w-xl mx-auto">
            <h3 className="text-3xl font-semibold mb-2">{songInfo.title}</h3>
            <h4 className="text-xl mb-4">by {songInfo.artist}</h4>
            <p className="text-secondaryText">{songInfo.description}</p>
          </div>
        )}
      </motion.div>

      <div className="shape-divider-top-1665696661 w-full mt-16">
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
