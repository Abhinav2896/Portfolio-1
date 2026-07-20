import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <GitHubSection />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
