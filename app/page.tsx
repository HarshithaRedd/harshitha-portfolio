import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import WhatIDo from "../components/WhatIDo";
import FeaturedWork from "../components/FeaturedWork";
import Experience from "../components/Experience";
import Capabilities from "../components/Capabilities";
import About from "../components/About";
import PhotoStory from "../components/PhotoStory";
import ContactGuestbook from "../components/ContactGuestbook";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-[#F1EDE5]">
      <Navbar />
      <Hero />
      <Impact />
      <WhatIDo />
      <FeaturedWork />
      <Experience />
      <Capabilities />
      <About />
      <PhotoStory />
      <ContactGuestbook />
      <Footer />
    </main>
  );
}