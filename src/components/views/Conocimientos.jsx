import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { DiJavascript, DiMongodb, DiMysql, DiScrum } from "react-icons/di";
import {
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiJira,
  SiPostman,
  SiSwagger,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { TbApi } from "react-icons/tb";
import { BsTrello } from "react-icons/bs";

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
    name: "Next.js",
    icon: <SiNextdotjs className="text-6xl text-black" />,
  },
  {
    id: 7,
    name: "Redux",
    icon: <SiRedux className="text-6xl text-purple-500" />,
  },
  {
    id: 8,
    name: "Zustand",
    icon: <GiBearFace className="text-6xl text-orange-500" />,
  },
  {
    id: 9,
    name: "Node.js",
    icon: <FaNodeJs className="text-6xl text-green-600" />,
  },
  {
    id: 10,
    name: "Express.js",
    icon: <FaNodeJs className="text-6xl text-gray-600" />,
  },
  {
    id: 11,
    name: "MySQL",
    icon: <DiMysql className="text-6xl text-blue-700" />,
  },
  {
    id: 12,
    name: "MongoDB",
    icon: <DiMongodb className="text-6xl text-green-600" />,
  },
  {
    id: 19,
    name: "Git",
    icon: <FaGitAlt className="text-6xl text-orange-600" />,
  },
  {
    id: 13,
    name: "GitHub",
    icon: <FaGithub className="text-6xl text-gray-800" />,
  },
  {
    id: 14,
    name: "Bootstrap",
    icon: <FaBootstrap className="text-6xl text-purple-700" />,
  },
  {
    id: 15,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-6xl text-cyan-500" />,
  },
  {
    id: 16,
    name: "Scrum",
    icon: <DiScrum className="text-6xl text-blue-400" />,
  },
  {
    id: 17,
    name: "Postman",
    icon: <SiPostman className="text-6xl text-orange-500" />,
  },
  // {
  //   id: 18,
  //   name: "Swagger",
  //   icon: <SiSwagger className="text-6xl text-green-500" />,
  // },

  {
    id: 20,
    name: "Trello",
    icon: <BsTrello className="text-6xl text-blue-500" />,
  },
  { id: 21, name: "Jira", icon: <SiJira className="text-6xl text-blue-700" /> },
];

const Conocimientos = () => {
  return (
    <section className="scroll-mt-20 py-12 bg-[#023047] text-white" id="conocimientos">
      <div className="flex justify-center text-center ">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold mb-12 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:bg-yellow-500 after:mt-2 mx-auto"
        >
          Stack Tecnológico
        </h2>
      </div>

      {/* Flexbox layout */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-y-8 px-4">
        {conocimientos.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            className="flex flex-col items-center justify-center w-1/3  md:w-1/5"
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
