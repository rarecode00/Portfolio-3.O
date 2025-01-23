export default function ProjectCard({
  projectIcon,
  projectTitle,
  description,
  techStack,
  projectLink,
  githubLink,
}) {
  return (
    <div className="flex flex-col rounded-xl drop-shadow-xl w-72 md:w-[600px] xl:w-[750px] snap-center bg-[#FFFFFF] bg-gradient-to-tr from-white mb-[3vh] to-darkGreen/20 p-5 md:p8 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 dark:bg-darkBackground dark:from-[#222121] dark:to-[#343939] h-[320px]">
      {/* Project Icon */}
      {projectIcon && (
        <div className="flex items-center justify-center mb-4">
          <img
            src={projectIcon}
            alt={`${projectTitle} logo`}
            className="w-16 h-16 object-contain"
          />
        </div>
      )}

      {/* Project Title */}
      <h2 className="text-base sm:text-lg md:text-xl font-bold text-start mb-2">
        {projectTitle}
      </h2>

       {/* Tech Stack */}
       {techStack && techStack.length > 0 && (
        <div className="pb-4 pt-2 flex gap-3 items-center flex-wrap mb-4">
          {techStack.map((tech, index) => (
            <DisplayTechSkills
              key={index}
              imgUrl={tech.imgSrc}
              hoverText={tech.name}
            />
          ))}
        </div>
      )}

     {/* Description */}
     <ul className="list-disc text-gray-300 text-sm sm:text-base space-y-2 mb-5 pl-5 max-h-[100px] overflow-y-auto custom-scrollbar">
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul> 

      {/* Links */}
      <div className="mt-auto flex justify-start gap-4">
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-blue-500 hover:underline"
          >
            Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:underline"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

function DisplayTechSkills({ imgUrl, hoverText }) {
  return (
    <div className="" title={hoverText}>
      <img
        src={imgUrl}
        alt={hoverText}
        className="w-8 h-8 object-contain rounded-md"
      />
    </div>
  );
}
