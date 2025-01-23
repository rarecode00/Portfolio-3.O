import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import Image from "next/image";
import { motion } from 'framer-motion';
import { Camera, Code, Zap } from 'lucide-react';

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveSizes = () => {
    if (windowWidth >= 1280) return {
      outerCircle: 'w-[700px] h-[700px]',
      secondCircle: 'w-[600px] h-[600px]',
      thirdCircle: 'w-[500px] h-[500px]',
      innerCircle: 'w-[400px] h-[400px]'
    };
    if (windowWidth >= 768) return {
      outerCircle: 'w-[600px] h-[600px]',
      secondCircle: 'w-[500px] h-[500px]',
      thirdCircle: 'w-[400px] h-[400px]',
      innerCircle: 'w-[300px] h-[300px]'
    };
    return {
      outerCircle: 'w-[300px] h-[300px]',
      secondCircle: 'w-[250px] h-[250px]',
      thirdCircle: 'w-[200px] h-[200px]',
      innerCircle: 'w-[150px] h-[150px]'
    };
  };

  const sizes = getResponsiveSizes();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative"
      >
        {/* Nested Circles with Dynamic Sizing */}
        <div className={`${sizes.outerCircle} rounded-full border border-gray-400/30 flex items-center justify-center`}>
          <div className={`${sizes.secondCircle} rounded-full border border-gray-400/40 flex items-center justify-center`}>
            <div className={`${sizes.thirdCircle} rounded-full border border-gray-400/50 flex items-center justify-center`}>
              <div className={`${sizes.innerCircle} rounded-full border border-gray-400/60 flex items-center justify-center relative`}>
                {/* Profile Image */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                    <Image
                      alt="my profile"
                      src="/my_profile.png"
                      width={144}
                      height={144}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Skill Icons */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <motion.div 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="relative w-full h-full"
                  >
                    <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2">
                      <Camera className="text-blue-300" size={24} />
                    </div>
                    <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
                      <Code className="text-green-300" size={24} />
                    </div>
                    <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2">
                      <Zap className="text-yellow-300" size={24} />
                    </div>
                  </motion.div>
                </div>

                {/* Typed Text */}
                <div className="absolute bottom-[-100px] text-center">
                  <h1 className="font-sans text-white text-xl mb-2">
                    Software Developer
                  </h1>
                  <ReactTyped
                    strings={[
                      "Crafting clean and efficient code",
                      "Breaking bugs, not hearts.",
                      "Your next innovation partner."
                    ]}
                    typeSpeed={50}
                    backSpeed={30}                      
                    loop
                    className="font-sans text-white text-2xl md:text-3xl whitespace-nowrap"
                  />
                </div>
              </div>              
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}