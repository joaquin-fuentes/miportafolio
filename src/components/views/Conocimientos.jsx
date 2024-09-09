import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript, DiMongodb, DiMysql, DiScrum } from "react-icons/di";
import { SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { TbApi } from "react-icons/tb";

const conocimientos = [
  { id: 1, name: "HTML", icon: <FaHtml5 className="text-6xl text-red-500" /> },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt className="text-6xl text-blue-500" />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <DiJavascript className="text-6xl text-yellow-400" />,
  },
  {
    id: 4,
    name: "TypeScript",
    icon: <SiTypescript className="text-6xl text-blue-600" />,
  },
  {
    id: 5,
    name: "React",
    icon: <FaReact className="text-6xl text-cyan-400" />,
  },
  {
    id: 6,
    name: "Redux",
    icon: <SiRedux className="text-6xl text-purple-500" />,
  },
  {
    id: 7,
    name: "Zustand",
    icon: <GiBearFace className="text-6xl text-orange-500" />,
  },
  {
    id: 8,
    name: "Node.js",
    icon: <FaNodeJs className="text-6xl text-green-600" />,
  },
  {
    id: 9,
    name: "MySQL",
    icon: <DiMysql className="text-6xl text-blue-700" />,
  },
  {
    id: 10,
    name: "MongoDB",
    icon: <DiMongodb className="text-6xl text-green-600" />,
  },
  {
    id: 11,
    name: "GitHub",
    icon: <FaGithub className="text-6xl text-gray-800" />,
  },
  {
    id: 12,
    name: "Bootstrap",
    icon: <FaBootstrap className="text-6xl text-purple-700" />,
  },
  {
    id: 13,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-6xl text-cyan-500" />,
  },
  {
    id: 14,
    name: "Scrum",
    icon: <DiScrum className="text-6xl text-blue-400" />,
  },
  {
    id: 15,
    name: "Manejo de APIs",
    icon: <TbApi className="text-6xl text-red-500" />,
  },
];

const Conocimientos = () => {
  return (
    <section className="py-12 bg-[#023047] text-white" id="conocimientos">
      <div className="text-center mb-12">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto"
        >
          Conocimientos
        </h2>
      </div>

      {/* Ajustamos el grid usando auto-fit y minmax */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 px-4">
        {conocimientos.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            className="flex flex-col items-center justify-center"
          >
            <div className="hover:scale-110 transition-transform duration-200">
              {item.icon}
            </div>
            <h4 className="mt-2 text-lg text-center">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Conocimientos;
