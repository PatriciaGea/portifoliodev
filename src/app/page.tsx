import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/layout/Navbar"), { ssr: false, loading: () => null });
const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false, loading: () => null });

// Lazy load seções que não estão na primeira tela
const About = dynamic(() => import("@/components/sections/About"), { ssr: false, loading: () => null });
const TechStack = dynamic(() => import("@/components/sections/TechStack"), { ssr: false, loading: () => null });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false, loading: () => null });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false, loading: () => null });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: false, loading: () => null });

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
