import Image from "next/image";

export default  function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between p-6 pt-8 items-center">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://leetcode.com/u/rarecode_00/" target="_blank" className="hover:bg-orange-400 rounded-full p-2">
            <Image
              src={"/leetcode.png"}
              width={"20"}
              height={"20"}
              alt="Logo 1"                        
            />
          </a>
          <a href="https://www.instagram.com/sharma.krishna.00/" target="_blank" className="hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] rounded-full p-2">
            <Image
              src={"/instagram.png"}
              width={"20"}
              height={"20"}
              alt="Logo 1"
            />
          </a>
          <a href="https://github.com/rarecode00" target="_blank" className="hover:bg-[#202020] rounded-full p-2">
            <Image
              src={"/github.png"}
              width={"20"}
              height={"20"}
              alt="Logo 1"
            />
          </a>
          <a href="https://www.linkedin.com/in/rarecode/" target="_blank" className="hover:bg-sky-700 rounded-full p-2">
            <Image
              src={"/linkedin.png"}
              width={"20"}
              height={"20"}
              alt="Logo 1"
            />
          </a>
        </div>
        <div className="flex gap-5 z-50">
          <a className="border border-solid border-transparent p-1 px-3 rounded-[9999px] hover:border-[#44c3c3]" href="/#about">About</a>
          <a className="border border-solid border-transparent p-1 px-3 rounded-[9999px] hover:border-[#44c3c3]" href="/#experience">Experience</a>
          <a className="border border-solid border-transparent p-1 px-3 rounded-[9999px] hover:border-[#44c3c3]" href="#skills">Skills</a>
          <a className="border border-solid border-transparent p-1 px-3 rounded-[9999px] hover:border-[#44c3c3]" href="#projects">Projects</a>
        </div>
        <div>Get in touch</div>
      </div>
    </header>
  );
}
