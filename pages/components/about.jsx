import Image from "next/image";

export function About() {
    return (
        <div className="flex flex-col md:flex-row gap-12 font-sans mt-20">
            {/* Image container */}
            <img
                src="/my_profile.png"
                className="w-36 h-36 sm:w-52 sm:h-52 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-90 md:h-140 lg:w-[350px] lg:h-[390px] mx-auto md:mx-0"
            />
            {/* Right container about me */}
            <div className="flex flex-col items-center md:items-start gap-8 text-center md:text-left flex-grow">
                <SectionHeading heading={'About'} />
                <p className="text-4xl">Here is a little bit about me</p>
                <p className="text-lg">
                    I am Krishna Sharma, a Computer Science graduate with 1.5+ years of professional experience as a web developer specializing in the MERN stack. I build scalable and efficient web applications, leveraging expertise in React.js, Next.js, Node.js, and databases like MongoDB and PostgreSQL. A passionate problem solver, I am a React 3-star coder on CodeChef and a Pupil on Codeforces. I am actively seeking roles as a full-stack, front-end, or back-end developer to contribute to innovative projects. Let's connect and explore the possibilities together!
                </p>
                <button className="border border-solid border-sky-500 p-2 rounded-lg self-center md:self-start">
                    Download Resume
                </button>
            </div>
        </div>
    );
}



export function SectionHeading({heading}){
    return (
        <div>
            <h1 className="uppercase text-3xl tracking-widest">{heading}</h1>
        </div>
    );
}