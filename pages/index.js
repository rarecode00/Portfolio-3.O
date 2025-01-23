import { useEffect, useLayoutEffect } from "react";
import Header from "../components/header";
import Hero from "../components/home";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skill";
import Projects from "../components/project";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <div
        className="snap-y snap-mandatory overflow-y-scroll h-screen"
        style={{
          scrollBehavior: "smooth", // For smooth scrolling
        }}
      >
        <section className="snap-start min-h-screen pt-20">
          <Hero />
        </section>
        <section className="snap-start min-h-screen pt-12 mx-16">
          <About />
        </section>
        <section className="snap-start min-h-screen pt-4 mx-16">
          <Experience />
        </section>
        <section className="snap-start min-h-screen pt-4 mx-16">
          <Skills />
        </section>
        <section className="snap-start min-h-screen pt-4 mx-16">
          <Projects />
        </section>
        <section className="snap-start min-h-screen pt-8 mx-16">
          <Contact />
        </section>
      </div>
    </div>
  );
}

