import { SectionHeading } from "./about";

export const skills = [
  {
    name: "JavaScript",
    imgSrc: "/javascript.svg",
  },
  {
    name: "TypeScript",
    imgSrc: "/typescript.svg",
  },
  {
    name: "Angular",
    imgSrc: "/angular.svg",
  },
  {
    name: "React.js",
    imgSrc: "/react.svg",
  },
  {
    name: "Next.js",
    imgSrc: "/next-js.svg",
  },
  {
    name: "Node.js",
    imgSrc: "/node-js.svg",
  },
  {
    name: "Vite",
    imgSrc: "/vite.svg",
  },
  {
    name: "MongoDB",
    imgSrc: "/mongod.svg",
  },
  {
    name: "Redis",
    imgSrc: "/redis.svg",
  },
  {
    name: "Git",
    imgSrc: "/git.svg",
  },
  {
    name: "GitHub",
    imgSrc: "/github.svg",
  },
  {
    name: "Bitbucket",
    imgSrc: "/bitbucket.svg",
  },
  {
    name: "Open Ai",
    imgSrc: "/openai.svg",
  },
  {
    name: "Linux",
    imgSrc: "/linux.svg",
  },
  {
    name: "Tailwind",
    imgSrc: "/tailwindcss.svg",
  },
  {
    name: "VS Code",
    imgSrc: "/vscode.svg",
  },
  {
    name: "Figma",
    imgSrc: "/figma.svg",
  },
  {
    name: "Html5",
    imgSrc: "/html.svg",
  },
  {
    name: "CSS",
    imgSrc: "/css.svg",
  },
  {
    name: "Postman",
    imgSrc: "/postman.svg",
  },
  {
    name: "Sublime",
    imgSrc: "/sublime.svg",
  },
  {
    name: "Slack",
    imgSrc: "/slack.svg",
  },
  {
    name: "Tanstack",
    imgSrc: "/tanstack.png",
  },
  {
    name: "Express.js",
    imgSrc: "/express.png",
  },
  {
    name: "Npm",
    imgSrc: "/npm.png",
  },
  {
    name: "C++",
    imgSrc: "/cpp.svg",
  },
  {
    name: "Mantine Ui",
    imgSrc: "/mantine.svg",
  },  
];

export function Skills() {
    return (
      <div className="mt-24 px-4" id="skills">
        <div className="flex justify-center">
          <SectionHeading heading={"Skills"} />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 mt-8">
            {skills.map((skill, index) => (
              <Skill key={index} name={skill.name} imgSrc={skill.imgSrc} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export function Skill({ name, imgSrc }) {
    return (
      <div className="group relative flex cursor-pointer">
        <img
          className="border-2 border-gray-500 object-contain p-2 sm:p-3 lg:p-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          src={imgSrc}
          alt={name}
        />
        <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-xs sm:text-sm md:text-md font-bold text-gray-900 opacity-100 text-center break-all px-1">
              {name}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
