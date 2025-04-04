import { useState, useRef, useEffect } from "react";

const WALLS = [
  // Marco exterior con apertura para entrada
  { top: 50, left: 120, width: 600, height: 10 }, // Top
  { top: 170, left: 120, width: 10, height: 170 }, // Left (parte inferior)
  { top: 60, left: 120, width: 10, height: 80 }, // Left (parte superior)
  { top: 330, left: 120, width: 600, height: 10 }, // Bottom
  { top: 60, left: 710, width: 10, height: 280 }, // Right

  // Laberinto principal - diseño con pasillos estrechos y obligatorios
  { top: 100, left: 180, width: 10, height: 240 },
  { top: 100, left: 180, width: 200, height: 10 },
  { top: 60, left: 400, width: 10, height: 90 },
  { top: 170, left: 300, width: 10, height: 90 },
  { top: 130, left: 560, width: 10, height: 150 },
  { top: 140, left: 220, width: 180, height: 10 },
  { top: 190, left: 220, width: 10, height: 100 },
  { top: 280, left: 220, width: 140, height: 10 },
  { top: 280, left: 380, width: 10, height: 50 },
  { top: 280, left: 380, width: 110, height: 10 },
  { top: 100, left: 480, width: 10, height: 190 },
  { top: 100, left: 480, width: 120, height: 10 },
  { top: 100, left: 600, width: 10, height: 80 },
  { top: 200, left: 600, width: 10, height: 110 },
  { top: 140, left: 220, width: 10, height: 50 },
  { top: 70, left: 440, width: 10, height: 190 },
  { top: 200, left: 600, width: 110, height: 10 },
  { top: 300, left: 510, width: 90, height: 10 },
  { top: 250, left: 310, width: 90, height: 10 },
];

export default function Laberinto() {
  const containerRef = useRef(null);
  const [trail, setTrail] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameState, setGameState] = useState(null);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  const startY = 140;
  const endX = 660;
  const endY = 210;
  const endSize = 50;

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
    const handleMouseMove = (e) => {
      if (!isPlaying || gameState) return;

      const bounds = containerRef.current.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      // Verificar colisión con paredes
      for (let wall of WALLS) {
        if (
          x >= wall.left &&
          x <= wall.left + wall.width &&
          y >= wall.top &&
          y <= wall.top + wall.height
        ) {
          handleLose();
          return;
        }
      }

      // Verificar si llegó a la salida
      if (
        x >= endX &&
        x <= endX + endSize &&
        y >= endY &&
        y <= endY + endSize
      ) {
        handleWin();
        return;
      }

      setTrail((prev) => [...prev.slice(-200), { x, y }]);
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);
    return () => container?.removeEventListener("mousemove", handleMouseMove);
  }, [isPlaying, gameState]);

  const handleStart = () => {
    setTrail([]);
    setIsPlaying(true);
    setGameState(null);
    setTimer(0);
  };

  const handleLose = () => {
    setTrail([]);
    setIsPlaying(false);
    setGameState("lose");
  };

  const handleWin = () => {
    setIsPlaying(false);
    setGameState("win");
  };

  return (
    <section
      className="scroll-mt-20 text-white py-12 bg-[#023047] text-center"
      id="laberinto"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold mb-6 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto"
      >
        Juego del Laberinto
      </h2>

      <p className="text-lg text-gray-300 mb-4" data-aos="fade-up">
        Mueve el mouse desde la <span className="text-green-400">entrada</span>{" "}
        hasta la <span className="text-red-400">salida</span> sin tocar las
        paredes.
      </p>

      <div className="mb-4">
        {isPlaying && <span className="text-yellow-400">Tiempo: {timer}s</span>}
        {gameState === "win" && (
          <span className="text-green-400 ml-4">Tiempo final: {timer}s</span>
        )}
      </div>

      <div
        ref={containerRef}
        data-aos="fade-up"
        className="relative md:w-[850px] h-[400px] mx-auto bg-gray-100 border-[3px] border-gray-800 overflow-hidden rounded-md shadow-lg"
        onMouseLeave={() => isPlaying && handleLose()}
      >
        {/* Entrada */}
        <div
          className="absolute bg-green-500/80 rounded-md"
          style={{
            top: startY,
            left: 110,
            width: 30,
            height: 30,
            zIndex: 1,
          }}
        />
        {/* Salida */}
        <div
          className="absolute bg-red-500/80 rounded-l-md"
          style={{
            top: endY,
            left: endX,
            width: endSize,
            height: endSize,
          }}
        />
        {/* Paredes */}
        {WALLS.map((wall, i) => (
          <div
            key={i}
            className="absolute bg-gray-800 shadow-inner"
            style={{
              top: wall.top,
              left: wall.left,
              width: wall.width,
              height: wall.height,
              borderRadius:
                wall.width === 10 || wall.height === 10 ? "2px" : "0",
            }}
          />
        ))}

        {/* Rastro */}
        {trail.map((point, index) => (
          <div
            key={index}
            className="absolute w-[3px] h-[3px] bg-blue-500 rounded-full shadow-sm"
            style={{ left: point.x, top: point.y }}
          />
        ))}

        {/* Instrucciones iniciales */}
        {!isPlaying && !gameState && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
            <div className="bg-[#023047] p-6 rounded-lg border border-yellow-500 max-w-md">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Instrucciones
              </h3>
              <p className="mb-4">
                Navega cuidadosamente por los pasillos estrechos desde la zona{" "}
                <span className="text-green-400">verde</span> hasta la zona{" "}
                <span className="text-red-400">roja</span>.
              </p>
              <button
                onClick={handleStart}
                className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
              >
                Comenzar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Botón */}
      <button
        onClick={handleStart}
        className="mt-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
      >
        {gameState ? "Reintentar" : isPlaying ? "Reiniciar" : "Comenzar"}
      </button>

      {/* Mensajes */}
      {gameState === "lose" && (
        <p className="text-red-400 mt-4 font-medium">
          ¡Tocaste una pared! Intenta de nuevo.
        </p>
      )}
      {gameState === "win" && (
        <p className="text-green-400 mt-4 font-medium">
          ¡Felicidades! Completaste el laberinto en {timer} segundos 🎉
        </p>
      )}
    </section>
  );
}
