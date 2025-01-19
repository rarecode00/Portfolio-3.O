import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0">
      <div className="flex justify-between p-6 pt-8 items-center">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <div className="bg-[red] rounded-full p-2">
            <Image
              src={"/leetcode.png"}
              width={"20"}
              height={"20"}
              alt="Logo 1"
            />
          </div>
          <div className="bg-[red] rounded-full p-2">
            <Image
              src={"/instagram.png"}
              width={"20"}
              height={"20"}
              alt="Logo 1"
            />
          </div>
          <div className="bg-[red] rounded-full p-2">
            <Image
              src={"/github.png"}
              width={"20"}
              height={"20"}
              alt="Logo 1"
            />
          </div>
          <div className="bg-[red] rounded-full p-2">
            <Image
              src={"/linkedin.png"}
              width={"20"}
              height={"20"}
              alt="Logo 1"
            />
          </div>
        </div>
        <div className="flex gap-8">
          <a>About</a>
          <a>Experience</a>
          <a>Skills</a>
          <a>Projects</a>
        </div>
        <div>Get in touch</div>
      </div>
    </header>
  );
}
