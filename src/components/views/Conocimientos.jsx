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
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { BsTrello } from "react-icons/bs";

const conocimientos = [
  // frontend
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 className="text-5xl text-red-500" />,
    group: "Frontend",
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt className="text-5xl text-blue-500" />,
    group: "Frontend",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <DiJavascript className="text-5xl text-yellow-400" />,
    group: "Frontend",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: <SiTypescript className="text-5xl text-blue-600" />,
    group: "Frontend",
  },
  {
    id: 5,
    name: "React",
    icon: <FaReact className="text-5xl text-cyan-400" />,
    group: "Frontend",
  },
  {
    id: 6,
    name: "NextJS",
    icon: <SiNextdotjs className="text-5xl text-black" />,
    group: "Frontend",
  },
  {
    id: 7,
    name: "Redux",
    icon: <SiRedux className="text-5xl text-purple-500" />,
    group: "Frontend",
  },
  {
    id: 8,
    name: "Zustand",
    icon: <GiBearFace className="text-5xl text-orange-500" />,
    group: "Frontend",
  },
  {
    id: 14,
    name: "Bootstrap",
    icon: <FaBootstrap className="text-5xl text-purple-700" />,
    group: "Frontend",
  },
  {
    id: 26,
    name: "ShadCN UI",
    icon: <FaReact className="text-5xl text-rose-400" />,
    group: "Frontend",
  },
  {
    id: 15,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-cyan-500" />,
    group: "Frontend",
  },

  // backend
  {
    id: 9,
    name: "NodeJS",
    icon: <FaNodeJs className="text-5xl text-green-600" />,
    group: "Backend",
  },
  {
    id: 10,
    name: "ExpressJS",
    icon: <FaNodeJs className="text-5xl text-gray-600" />,
    group: "Backend",
  },
  {
    id: 22,
    name: "NestJS",
    icon: <SiNestjs className="text-5xl text-red-600" />,
    group: "Backend",
  },
  {
    id: 23,
    name: "Prisma",
    icon: <SiPrisma className="text-5xl text-indigo-500" />,
    group: "Base de datos",
  },
  {
    id: 24,
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-5xl text-blue-800" />,
    group: "Base de datos",
  },
  {
    id: 25,
    name: "Firebase",
    icon: <SiFirebase className="text-5xl text-yellow-400" />,
    group: "Base de datos",
  },
  {
    id: 11,
    name: "MySQL",
    icon: <DiMysql className="text-5xl text-blue-700" />,
    group: "Base de datos",
  },
  {
    id: 12,
    name: "MongoDB",
    icon: <DiMongodb className="text-5xl text-green-600" />,
    group: "Base de datos",
  },

  // herramientas
  {
    id: 13,
    name: "GitHub",
    icon: <FaGithub className="text-5xl text-gray-300 " />,
    group: "Herramientas",
  },
  {
    id: 19,
    name: "Git",
    icon: <FaGitAlt className="text-5xl text-orange-600" />,
    group: "Herramientas",
  },
  {
    id: 16,
    name: "Scrum",
    icon: <DiScrum className="text-5xl text-blue-400" />,
    group: "Metodologías",
  },
  {
    id: 17,
    name: "Postman",
    icon: <SiPostman className="text-5xl text-orange-500" />,
    group: "Herramientas",
  },
  {
    id: 18,
    name: "Swagger",
    icon: <SiSwagger className="text-5xl text-green-500" />,
    group: "Herramientas",
  },
  {
    id: 20,
    name: "Trello",
    icon: <BsTrello className="text-5xl text-blue-500" />,
    group: "Herramientas",
  },
  {
    id: 21,
    name: "Jira",
    icon: <SiJira className="text-5xl text-blue-700" />,
    group: "Herramientas",
  },
];

const Conocimientos = () => {
  return (
    <section
      className="scroll-mt-20 py-12 bg-[#023047] text-white"
      id="conocimientos"
    >
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
            <div className="hover:scale-125 transition-transform duration-200">
              {item.icon}
            </div>
            <h4 className="mt-2 text-lg text-center">{item.name}</h4>
            <p className="text-xs text-gray-400">{item.group}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Conocimientos;
