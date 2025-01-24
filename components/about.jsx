import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Code } from 'lucide-react';

export default function About() {
    const handleResumeDownload = () => {
        window.open('/Krishna_Sharma_Resume.pdf', '_blank');
    };

    return (
        <div className="flex flex-col md:flex-row gap-12 font-sans mt-20 max-w-6xl mx-auto px-4 items-center" id="about">
            {/* Image container with improved sizing */}
            <motion.div 
                className="w-full md:w-1/2 lg:w-[450px] flex-shrink-0"
                // onHoverStart={() => setIsHovered(true)}
                // onHoverEnd={() => setIsHovered(false)}
            >
                <motion.img
                    src="/new_profile.png"
                    alt="Krishna Sharma"
                    className="w-full h-auto rounded-lg object-cover"
                    style={{ maxHeight: '440px' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />               
            </motion.div>

            {/* Right container about me */}
            <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left w-full md:w-1/2">
                <SectionHeading heading={'About'} />
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl"
                >
                    Here is a little bit about me
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg"
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