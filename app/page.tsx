import AosProvider from "@/components/AosProvider";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import AnimatedBlobs from "@/components/AnimatedBlobs";
import ParticlesBackground from "@/components/ParticlesBackground";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <AosProvider>
      <Loader />
      <AnimatedBlobs />
      <ParticlesBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>

      <ScrollToTop />
    </AosProvider>
  );
}
