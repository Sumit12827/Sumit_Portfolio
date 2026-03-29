import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Projects from '@/components/Projects';
import { SkillsSection } from '@/components/Skills';
import { ContactSection } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import AnoAI from '@/components/ui/animated-shader-background';

export default function Home() {
  return (
    <main className="min-h-screen text-foreground relative">
      <AnoAI />
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <About />
      <Projects />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
