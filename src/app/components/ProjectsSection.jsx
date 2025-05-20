"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "countryBook ",
    description: "CountryBook is a sleek and responsive web application that allows users to explore detailed information about countries from around the world.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karindragimhan49/countryBook.git",
    previewUrl: "https://country-book-ten.vercel.app/",
  },
  {
    id: 2,
    title: "LeafLink",
    description: "Welcome to LeafLink The Finest Tea Collection",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shavinka2001/LeafLink.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Automated Linux Server Setup with CI-CD Integration",
    description: "A beginner-friendly DevOps project that automates the setup of a Node.js web application on a Linux server using Bash scripts, systemd, Nginx, and GitHub Actions for CI/CD deployment.",
    image: "/images/projects/3.png",
    tag: ["All", "Devops"],
    gitUrl: "https://github.com/karindragimhan49/Automated-Linux-Server-Setup-with-CI-CD-Integration.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Software Test Automation",
    description: "This repository contains automated UI and functional test cases written using Python + Selenium WebDrive.",
    image: "/images/projects/4.png",
    tag: ["All", "Devops"],
    gitUrl: "https://github.com/karindragimhan49/Software-Test-Automation-.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "PursePulse",
    description:"Welcome to the Finance Tracker with Currency Converter ! 🎯 This backend powers a Finance Tracker application, providing robust API endpoints to manage user authentication, transactions, goals, budgets, and more.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karindragimhan49/PursePulse.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Employee-Management-System ",
    description: "Employee-Management-System Public A full-featured Employee Management System with integrated frontend and backend.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/karindragimhan49/Employee-Management-System.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Devops"
          isSelected={tag === "Devops"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
