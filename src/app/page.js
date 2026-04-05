"use client";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Loader from "./components/Loader/Loader";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";


export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
    {loading ? (
      <Loader onFinish={() => setLoading(false)} />
    ) : (
      <>
       <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
       </>
    )}
   
    </>
  );
}