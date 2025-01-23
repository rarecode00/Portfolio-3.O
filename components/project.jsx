import { SectionHeading } from "./about";
import ProjectCard from "./projectCard";

export default function Projects() {
  const projectObj = [
    {
        projectIcon: null, // Optional: Add a URL to your project icon or leave as null
        projectTitle: "React iPod",
        description: [
            "A lightning-fast app based on React JS.",
            "Includes a Music component to play music.",
            "Tracks are retrieved from Firebase storage.",                        
          ],
        techStack: [
          { name: "JavaScript", imgSrc: "/javascript.svg" }, // Replace with the actual path to your tech stack icons
          { name: "Firebase", imgSrc: "/firebase.svg" },
          { name: "CSS", imgSrc: "/css.svg" },
          { name: "HTML", imgSrc: "/html.svg" },
        ],
        projectLink: "https://rarecode00.github.io/React-Ipod/",
        githubLink: "https://github.com/rarecode00/React-Ipod",
      },
      {
        projectIcon: null, // Optional: Add a URL to your project icon or leave as null
        projectTitle: "iNoteBook",
        description: [
            "Built a cloud-based MERN application for seamless management of personal notes.",
            "Created an intuitive web platform for users to privately create, edit, upload, and delete personal notes.",
            "Utilized JWT for user authentication and implemented a secure login page to protect user privacy.",                        
          ],
        techStack: [
          { name: "JavaScript", imgSrc: "/javascript.svg" }, // Replace with the actual path to your tech stack icons
          { name: "Express.js", imgSrc: "/express.png" },
          { name: "React Js", imgSrc: "/react.svg" },
          { name: "Mongo DB", imgSrc: "/mongod.svg" },
          { name: "Node Js", imgSrc: "/node-js.svg" },
        ],        
        githubLink: "https://github.com/rarecode00/iNotebook",
      }
  ]
  return (
    <div className="mt-24" id="projects">
      <div className="flex justify-center">
        <SectionHeading heading={"Projects"} />
      </div>
      <div className="flex items-center gap-8 overflow-x-auto custom-scrollbar mt-14">
        {projectObj &&
          Array.isArray(projectObj) &&
          projectObj?.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </div>
    </div>
  );
}
