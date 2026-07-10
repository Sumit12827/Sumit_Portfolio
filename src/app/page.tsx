import dynamic from 'next/dynamic';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import AnoAI from '@/components/ui/animated-shader-background';

// Dynamically import below-the-fold components to reduce initial JS payload
const About = dynamic(() => import('@/components/About'), { ssr: true });
const Experience = dynamic(() => import('@/components/Experience'), { ssr: true });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: true });
const SkillsSection = dynamic(() => import('@/components/Skills').then((mod) => mod.SkillsSection), { ssr: true });
const ContactSection = dynamic(() => import('@/components/Contact').then((mod) => mod.ContactSection), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer').then((mod) => mod.Footer), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen text-foreground relative">
      <AnoAI />
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <About />
      <Experience />
      <Projects />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
