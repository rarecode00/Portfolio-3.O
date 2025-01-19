import Image from "next/image";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0">
            <div className="flex justify-between p-6 pt-8">
                {/* Social Icons */}
                <div className="flex">
                    <Image src={''} alt="Logo 1"/>
                    <Image src={''} alt="Logo 1"/>
                    <Image src={''} alt="Logo 1"/>                    
                </div>
                <div className="flex gap-8">                    
                    <a>About</a>
                    <a>Experience</a>
                    <a>Skills</a>
                    <a>Projects</a>                    
                </div>
                <div>
                    Get in touch
                </div>
            </div>
        </header>
    );
}