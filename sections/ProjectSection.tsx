import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import terminalPortfolio from "public/sendit.webp";
import haruFashion from "public/botwana.webp";
import haruApi from "public/instant.webp";
import astroPaper from "public/aht.webp";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the projects? I got you. <br />
        Here are some of my projects where i have worked and you shouldn't miss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Sendit Certified",
    type: "Frontend",
    image: (
      <Image
        src={terminalPortfolio}
        sizes="100vw"
        fill
        alt="Sendit Certified"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Sendit Certified is a Secure way of communication between individuals or businesses. It helps any individual or enterprise to communicate between them in a secure way which is different from any other email communication.",
    tags: ["React", "Redux-middleware", "Redux-forms", "Node JS"],
    liveUrl: "https://www.senditcertified.com/",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Botswana Life",
    type: "Frontend",
    image: (
      <Image
        src={haruFashion}
        sizes="100vw"
        fill
        alt="Botswana Life"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Botswana Life Insurance is the leading insurance company in Botswana with current market share of 80%. It is a 100% subsidiary of Botswana Insurance Holdings, which is listed in the Botswana Stock Exchange. Botswana life provides insurance products for individual as well as corporate clients.",
    tags: ["React", "Redux-middleware", "MUI",],
    liveUrl: "https://www.botswanalife.co.bw/",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "Instant Anlytics",
    type: "Frontend",
    image: (
      <Image
        src={haruApi}
        sizes="100vw"
        fill
        alt="Instant Anlytics"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "InstantAnalytics comes with an ever-growing list of pre-built connections and dashboards to allow organizations to instantly enable users with interactive insights. In three simple steps, enable an unlimited amount of users on your own Tableau Server.",
    tags: ["React","Node JS", "Redux-middleware", "MUI",],
    liveUrl: "https://www.instantanalytics.io/",
    bgColor: "bg-[#C5E4E7]",
  },
  {
    title: "Application Health Tracker",
    type: "Frontend",
    image: (
      <Image
        src={astroPaper}
        sizes="100vw"
        fill
        alt="Application Health Tracker"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Application Health Tracker (AHT) is a unique product for managing and tracking the asset health of all application in the landscape. It is simple, intuitive and training less product which offers a robust application to track application stacks (e.g. software, database, operating system etc) throughout their life cycle.",
    tags: ["React", "Redux-middleware", "MUI",],
    liveUrl: "https://www.cashapona.com/application-health-tracker/",
    bgColor: "bg-[#9FD0E3]",
  },
];

export default ProjectSection;
