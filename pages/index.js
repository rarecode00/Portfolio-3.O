import { useEffect, useLayoutEffect } from "react";
import Header from "../components/header";
import Hero from "../components/home";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skill";
import Projects from "../components/project";
import Contact from "../components/contact";

export default function Home() {

  useLayoutEffect(() => {
    const handleAnchorScroll = () => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // 80px offset from the top
          behavior: 'smooth',
        });
      }
    };

    // Listen for hash changes in the URL (e.g., #about, #skills)
    window.addEventListener('hashchange', handleAnchorScroll);

    // Handle initial scroll if there is already a hash in the URL
    if (window.location.hash) {
      handleAnchorScroll();
    }

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener('hashchange', handleAnchorScroll);
    };
  }, []);  // Runs once on mount
  
  return (
    <div className="mx-8 font-sans mb-20">
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
