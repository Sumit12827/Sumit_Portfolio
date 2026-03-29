"use client";

import { cn } from "@/lib/utils";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
  direction?: "forward" | "backward";
  showHeading?: boolean;
}

const Logos3 = ({
  heading = "Technologies | Work With",
  logos = [
    {
      id: "logo-1",
      description: "Swift",
      image: "https://cdn.worldvectorlogo.com/logos/swift-15.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "React",
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "TypeScript",
      image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Tailwind CSS",
      image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Vite",
      image: "https://cdn.worldvectorlogo.com/logos/vitejs.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Redux",
      image: "https://cdn.worldvectorlogo.com/logos/redux.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Git",
      image: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-8",
      description: "Figma",
      image: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-9",
      description: "GitHub",
      image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
      className: "h-7 w-auto invert",
    },
  ],
  direction = "forward",
  showHeading = true,
}: Logos3Props) => {
  return (
    <section className={showHeading ? "py-24" : "py-0"}>
      {showHeading && (
        <div className="w-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="my-6 text-2xl font-bold text-pretty lg:text-4xl tracking-tight">
            {heading}
          </h1>
        </div>
      )}
      <div className={showHeading ? "pt-10 md:pt-16 lg:pt-20" : "pt-0"}>
        <div className="relative mx-auto flex w-full items-center justify-center">
          <Carousel
            opts={{ 
              loop: true,
              align: "center",
            }}
            plugins={[AutoScroll({ playOnInit: true, direction, stopOnInteraction: false, speed: 1 })]}
            className="w-full max-w-7xl"
          >
            <CarouselContent>
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <div className="flex shrink-0 items-center justify-center p-4">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={cn("h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300", logo.className)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
