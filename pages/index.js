import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import { Header } from "./components/header";
import { Hero } from "./components/home";
import { Projects } from "./components/project";
import { Skills } from "./components/skill";

export default function Home() {
  return (
    <div className="mx-8">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
