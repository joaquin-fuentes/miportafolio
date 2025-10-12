import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { DiJavascript, DiMongodb } from "react-icons/di";

const ICONOS = [
  { id: 1, name: "HTML", icon: <FaHtml5 className="text-5xl text-red-500" /> },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt className="text-5xl text-blue-500" />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <DiJavascript className="text-5xl text-yellow-400" />,
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact className="text-5xl text-cyan-400" />,
  },
  {
    id: 5,
    name: "Node.js",
    icon: <FaNodeJs className="text-5xl text-green-600" />,
  },
  {
    id: 6,
    name: "MongoDB",
    icon: <DiMongodb className="text-5xl text-green-500" />,
  },
  {
    id: 7,
    name: "Git",
    icon: <FaGitAlt className="text-5xl text-orange-500" />,
  },
  {
    id: 8,
    name: "GitHub",
    icon: <FaGithub className="text-5xl text-gray-700" />,
  },
];

export default function Cartas() {
  const [deck, setDeck] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef(null);

  const startGame = () => {
    const duplicated = [...ICONOS, ...ICONOS].map((card) => ({
      ...card,
      uuid: crypto.randomUUID(),
    }));
    const shuffled = duplicated.sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setFlipped([]);
    setMatched([]);
    setTimer(0);
    setIsPlaying(true);
    setGameOver(false);
  };

  const endGame = () => {
    setDeck([]);
    setFlipped([]);
    setMatched([]);
    setTimer(0);
    setIsPlaying(false);
    setGameOver(false);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  useEffect(() => {
    if (matched.length === deck.length && deck.length > 0) {
      setIsPlaying(false);
      setGameOver(true);
    }
  }, [matched, deck.length]);

  const handleFlip = (card) => {
    if (
      flipped.length === 2 ||
      flipped.some((f) => f.uuid === card.uuid) ||
      matched.some((m) => m.uuid === card.uuid)
    ) {
      return;
    }

    const newFlipped = [...flipped, card];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [a, b] = newFlipped;
      if (a.id === b.id) {
        setTimeout(() => {
          setMatched((prev) => [...prev, a, b]);
          setFlipped([]);
        }, 500);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <section
      className="py-12 px-6 bg-[#023047] text-white text-center"
      id="juego-memoria"
    >
      <div data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto">
          Juego de Memoria
        </h2>

        {!isPlaying && !gameOver && (
          <div
            data-aos="fade-up"
            className="text-gray-300 mb-6 max-w-xl mx-auto"
          >
            <p className="text-lg">¿Cuánto sabés de desarrollo web? 💻</p>
            <p className="text-base mt-2">
              Hacé clic en{" "}
              <span className="text-yellow-400 font-semibold">Comenzar</span> y
              emparejá las tecnologías frontend y backend.
            </p>
          </div>
        )}

        {isPlaying && (
          <p className="text-yellow-400 mb-4 text-lg">
            ⏱️ Tiempo transcurrido:{" "}
            <span className="font-semibold">{timer}s</span>
          </p>
        )}

        {gameOver && (
          <p className="text-green-400 font-semibold text-lg mb-4">
            🎉 ¡Felicitaciones! Terminaste en {timer} segundos. ¿Jugamos otra
            vez?
          </p>
        )}

        <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto mb-6">
          {deck.map((card) => {
            const isFlipped =
              flipped.some((f) => f.uuid === card.uuid) ||
              matched.some((m) => m.uuid === card.uuid);

            return (
              <div
                key={card.uuid}
                className="relative w-full lg:h-[15vh] aspect-square [perspective:1000px] cursor-pointer"
                onClick={() => handleFlip(card)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* Frente */}
                  <div className="absolute w-full h-full bg-white text-black rounded-xl border-2 border-yellow-400 shadow-inner flex items-center justify-center text-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    {card.icon}
                  </div>

                  {/* Dorso */}
                  <div className="absolute w-full h-full bg-yellow-500 rounded-xl border-2 border-yellow-400 flex items-center justify-center font-bold text-xl [backface-visibility:hidden]">
                    ?
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={startGame}
            className="relative bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold px-8 py-3 rounded-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 hover:scale-105 overflow-hidden group"
          >
            <span className="relative z-10">
              {deck.length > 0 ? "Reiniciar" : "Comenzar"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>

          {isPlaying && (
            <button
              onClick={endGame}
              className="relative text-yellow-400 border border-yellow-400 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">Terminar partida</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
