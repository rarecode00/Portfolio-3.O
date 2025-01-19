import Image from "next/image";

export function About() {
    return (
        <div className="flex gap-12 font-sans mt-20">            
                <img src="/my_profile.png" className="md:mb-0 flex-shrink-0 w-36 h-36 sm:w-52 sm:h-52 rounded-full object-cover md:rounded-lg md:w-90 md:h-140 lg:w-[350px] lg:h-[390px]"/>            
            {/* right container about me */}
            <div className="flex flex-col items-start gap-8">
                <SectionHeading heading={'About'}/>
                <p className="text-4xl">Here is a little bit about me</p>
                <p className="text-lg">I am Krishna Sharma, a Computer Science graduate with 1.5+ years of professional experience as a web developer specializing in the MERN stack. I build scalable and efficient web applications, leveraging expertise in React.js, Next.js, Node.js, and databases like MongoDB and PostgreSQL. A passionate problem solver, I am a React 3-star coder on CodeChef and a Pupil on Codeforces. I am actively seeking roles as a full-stack, front-end, or back-end developer to contribute to innovative projects. Let's connect and explore the possibilities together!</p>
                <button className="border border-solid border-sky-500 p-2 rounded-lg">Download Resume</button>
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