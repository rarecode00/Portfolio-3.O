import { useMemo } from "react";
import { skills } from "./skill";
export function ExperienceCard({

  companyIcon,
  jobTitle,
  companyName,
  techStack,
  dateFrom,
  dateTo,
  isCurrentWorking,
  workDescription,
}) {
  // find the tech stack from skills by name and push the object and return the array
  const techStackList = useMemo(() => {
    return techStack.map((skill) => {
      const foundSkill = skills.find((s) => s.name === skill);
      return foundSkill;
    });
  }, [techStack]);
  return (
    <div className=" flex font-sans drop-shadow-xl flex-col rounded-xl space-y-0 flex-shrink-0 w-72 md:w-[600px] xl:w-[750px] snap-center bg-[#FFFFFF] bg-gradient-to-tr from-white mb-[3vh] to-darkGreen/20 p-5 md:p8 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 dark:bg-darkBackground dark:from-[#222121] dark:to-[#343939] h-[400px]">
      {/* Company Icon */}
      <div className="flex items-center justify-center mb-4">
        <img
          src={companyIcon}
          alt={`${companyName} logo`}
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Job Title */}
      <h2 className="pl-8 text-base sm:text-lg md:text-xl font-bold text-start mb-2">
        {jobTitle}
      </h2>

      {/* Company Name */}
      <p className="pl-8 text-start text-gray-700 text-xs sm:text-sm md:text-base mb-4">
        {companyName}
      </p>

      {/* Tech Stack */}
      {techStack && techStack.length > 0 && (
        <div className="pl-8 pb-4 pt-2 flex gap-3 items-center flex-wrap mb-4">
          {techStackList?.map((tech, index) => (
            <DisplayTechSkills
              key={index}
              imgUrl={tech.imgSrc}
              hoverText={tech.name}
            />
          ))}
        </div>
      )}

      {/* Dates */}
      <p className="pl-8 text-start text-gray-600 text-xs sm:text-sm md:text-base mb-4">
        {dateFrom} - {isCurrentWorking ? "Present" : dateTo}
      </p>

      {/* Work Description */}
      <div className="flex-grow overflow-y-auto pt-2 w-full max-h-[200px] custom-scrollbar px-2">
        <ul className="list-disc text-textl dark:text-textd space-y-2 pr-5 text-justify ml-0 text-xs sm:text-sm md:text-lg pl-5">
          {workDescription.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DisplayTechSkills({ imgUrl, hoverText }) {
  return (
    <div className="" title={hoverText}>
      <img src={imgUrl} alt={hoverText} className="w-8 h-8 object-contain rounded-md" />
    </div>
  );
}
