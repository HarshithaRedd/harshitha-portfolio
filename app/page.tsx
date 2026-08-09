import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import WhatIDo from "../components/WhatIDo";
import FeaturedWork from "../components/FeaturedWork";
import Experience from "../components/Experience";
import Capabilities from "../components/Capabilities";
import About from "../components/About";
import PhotoStory from "../components/PhotoStory";
import Journey from "../components/Journey";
import Contact from "../components/Contact";
import Guestbook from "../components/Guestbook";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Navbar />

      <Hero />

      <Reveal>
        <Impact />
      </Reveal>

      <Reveal>
        <WhatIDo />
      </Reveal>

      <Reveal>
        <FeaturedWork />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <Capabilities />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      
        <PhotoStory />
      

      <Reveal>
        <Journey />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Reveal>
        <Guestbook />
      </Reveal>

      <Footer />
    </main>
  );
}