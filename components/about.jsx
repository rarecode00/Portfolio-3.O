import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Code } from 'lucide-react';

export default function About() {
    const handleResumeDownload = () => {
        window.open('/Krishna_Sharma_Resume.pdf', '_blank');
    };

    return (
        <div className="flex flex-col md:items-start lg:items-start md:flex-row font-sans gap-6 md:gap-14 lg:gap-14 mt-20 max-w-7xl px-4 items-center" id="about">
            {/* Image container with improved sizing */}
            <motion.div 
                className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly items-center gap-4"
                // onHoverStart={() => setIsHovered(true)}
                // onHoverEnd={() => setIsHovered(false)}
            >
                <motion.img
                    src="/new_profile.png"
                    alt="Krishna Sharma"
                    className="md:mb-0 flex-shrink-0 w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover md:rounded-lg md:w-90 md:h-140 lg:w-[370px] lg:h-[430px]"                    
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />               
            </motion.div>

            {/* Right container about me */}
            <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left w-full md:w-[60%]">
                <div className='hidden lg:block md:block'>
                <SectionHeading heading={'About'} />
                </div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:2xl lg:text-4xl font-semibold text-textl dark:text-textd"
                >
                    Here is a little bit about me
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-sm md:text-lg lg:text-lg text-justify text-textl dark:text-textd"
                >
                    I am Krishna Sharma, a Computer Science graduate with 1.5+ years of professional experience as a web developer specializing in the MERN stack. I build scalable and efficient web applications, leveraging expertise in React.js, Next.js, Node.js, and databases like MongoDB and PostgreSQL. A passionate problem solver, I am a React 3-star coder on CodeChef and a Pupil on Codeforces. I am actively seeking roles as a full-stack, front-end, or back-end developer to contribute to innovative projects. Let's connect and explore the possibilities together!
                </motion.p>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleResumeDownload}
                    className="flex items-center gap-2 border border-solid border-sky-500 p-2 rounded-lg self-center md:self-start hover:bg-sky-500 hover:text-white transition-colors"
                >
                    <Download size={20} />
                    Download Resume
                </motion.button>
            </div>
        </div>
    );
}

export function SectionHeading({heading}){
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="uppercase text-3xl tracking-widest">{heading}</h1>
        </motion.div>
    );
}