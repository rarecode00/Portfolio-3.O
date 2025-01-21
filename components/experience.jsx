import { SectionHeading } from "./about";
import ExperienceCard from "./experienceCard";

export default function Experience() {
  const experienceData = [
    {
      jobTitle: "Full Stack Developer",
      companyName: "Klimb.io",
      companyIcon: "/klimb.png",
      dateFrom: "Jun 2023",
      dateTo: null, // Use null to indicate current working
      isCurrentWorking: true,
      workDescription: [
        "Spearheaded the complete redevelopment of a complex application, migrating from Angular to React, resulting in enhanced performance, user experience, and maintainability.",
        "Designed and implemented OpenSearch functionality to improve data retrieval and search capabilities across the platform.",
        "Developed and optimized RESTful APIs to streamline system integration and ensure efficient data flow.",
        "Collaborated with cross-functional teams to seamlessly integrate front-end and back-end components.",
        "Leveraged agile methodologies to deliver high-quality software solutions within project timelines.",
      ],
      techStack: ['JavaScript', 'Angular', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Open Ai', 'Tailwind', 'Mantine Ui', 'Tanstack', 'Bitbucket', 'Figma', 'Slack'],
    },
    {
      jobTitle: "Frontend Developer Intern",
      companyName: "StoreMitra",
      companyIcon: "/storemitra.jpeg",
      dateFrom: "Feb 2023",
      dateTo: "Apr 2023",
      isCurrentWorking: false,
      workDescription: [
        "Designed and implemented search bar functionality for filtering data based on specific parameters.",
        "Developed code to export data in formats such as Excel and PDF.",
        "Integrated multi-language support into application for better user experience.",
        "Collaborated with team members in an agile development environment to achieve project goals.",
      ],
      techStack: ['JavaScript', 'React.js', 'Next.js', 'VS Code'],
    },
    {
      jobTitle: "Teaching Assistant",
      companyName: "Coding Ninjas",
      companyIcon: "/cn.png",
      dateFrom: "Oct 2022",
      dateTo: "Feb 2023",
      isCurrentWorking: false,
      workDescription: [
        "Assisted students with resolving their Data Structures and Algorithms (DSA) related doubts and concerns.",
        "Debugged and troubleshot Data Structures and Algorithms (DSA) code to identify and resolve issues.",
      ],
      techStack: ['C++'],
    },
  ];

  return (
    <div className="mt-24" id="experience">
      <div className="flex justify-center">
        <SectionHeading heading={"Experience"} />
      </div>
      <div className="flex items-center gap-8 overflow-x-auto custom-scrollbar mt-14">
        {experienceData && Array.isArray(experienceData) && experienceData?.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}
