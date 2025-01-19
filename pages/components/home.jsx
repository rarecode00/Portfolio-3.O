import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative">
        {/* Outermost circle */}
        <div className="w-96 h-96 md:w-[600px] md:h-[600px] rounded-full border border-gray-400/30 flex items-center justify-center">
          {/* Second circle */}
          <div className="w-80 h-80 md:w-[500px] md:h-[500px] rounded-full border border-gray-400/40 flex items-center justify-center">
            {/* Third circle */}
            <div className="w-64 h-64 md:w-[400px] md:h-[400px] rounded-full border border-gray-400/50 flex items-center justify-center">
              {/* Fourth circle (innermost) */}
              <div className="w-48 h-48 md:w-[300px] md:h-[300px] rounded-full border border-gray-400/60 flex items-center justify-center">
                {/* Content container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <Image
                      alt="my profile"
                      src="/my_profile.png"
                      width={144}
                      height={144}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="relative top-[90px]">
                  <h1 className="font-sans text-white text-xl mt-4">
                    Software Developer
                  </h1>
                  <div className="absolute top-[60px] left-[-100px]">
                    <ReactTyped
                      strings={[
                        "Crafting clean and efficient code",
                        "Breaking bugs, not hearts.",
                        "Your next innovation partner."
                      ]}
                      typeSpeed={50}
                      backSpeed={30}                      
                      loop
                      className="font-sans text-white text-3xl whitespace-nowrap"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
