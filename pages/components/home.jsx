"use client";
import Image from "next/image";
import { ReactTyped } from "react-typed";

export function Hero() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative">
        {/* Outermost circle */}
        <div className="w-[600px] h-[600px] rounded-full border border-gray-300 flex items-center justify-center animate-[ripple_3s_ease-in-out_infinite] opacity-70">
          {/* Second circle */}
          <div className="w-[500px] h-[500px] rounded-full border border-gray-400 flex items-center justify-center animate-[ripple_3s_ease-in-out_infinite_0.75s] opacity-70">
            {/* Third circle */}
            <div className="w-[400px] h-[400px] rounded-full border border-gray-500 flex items-center justify-center animate-[ripple_3s_ease-in-out_infinite_1.5s] opacity-70">
              {/* Fourth circle (innermost) */}
              <div className="w-[300px] h-[300px] rounded-full border border-gray-600 flex items-center justify-center animate-[ripple_3s_ease-in-out_infinite_2.25s] opacity-70">
                {/* Content container */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      alt="my profile"
                      src="/api/placeholder/96/96"
                      width={96}
                      height={96}
                    //   className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center font-medium text-2xl tracking-widest">
                    Software Developer
                  </p>
                  <ReactTyped
                    strings={[
                      "Passionate about coding.",
                      "MERN Stack Developer.",
                      "Problem Solver.",
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                    className="text-2xl text-gray-300 mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
