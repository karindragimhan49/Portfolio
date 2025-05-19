"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Bash Scripting & Shell Automation</li>
        <li>CI/CD with GitHub Actions & Jenkins</li>
        <li>Docker & Kubernetes (Basics)</li>
        <li>AWS, Azure & Oracle Cloud (Foundations)</li>
        <li>React, Node.js, Express</li>
        <li>MongoDB, MySQL</li>
        <li>Python (Automation & Testing)</li>
        <li>Linux (WSL/Ubuntu), Nginx, systemd</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Sri Lanka Institute of Information Technology (SLIIT)</li>
        <li>BSc (Hons) in Software Engineering – Specialization in DevOps</li>
        <li>Shariputre College, Matara – G.C.E. A/L (Technology Stream)</li>
        <li>Siridhamma College, Galle – G.C.E. O/L</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
        {[
          { src: "/badges/badge1.png", label: "GitHub Foundations – DevOps & CI/CD" },
          { src: "/badges/badge2.png", label: "Introduction to Linux – The Linux Foundation" },
          { src: "/badges/badge3.png", label: "AWS Educate: Cloud Operations" },
          { src: "/badges/badge4.png", label: "Docker Essentials – IBM" },
          { src: "/badges/badge5.png", label: "Oracle Cloud AI Foundations Associate" },
          { src: "/badges/badge6.png", label: "Microsoft AI Skils Fest" },
          { src: "/badges/badge7.png", label: "Python – University of Moratuwa" },
          { src: "/badges/badge8.png", label: "SQL & Relational Databases – IBM" },
          { src: "/badges/badge9.png", label: "Networking Basics – Cisco" },
        ].map((badge, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={badge.src}
              alt={badge.label}
              width={100}
              height={100}
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-sm text-white">{badge.label}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About me image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a DevOps-focused software engineering undergraduate from SLIIT,
            with a strong interest in automation, CI/CD pipelines, and cloud
            infrastructure. I've worked on real-world projects involving Linux
            server automation, Docker, GitHub Actions, Node.js deployment, and
            microservices architecture. I'm passionate about scalable and reliable
            systems, and constantly exploring tools like Jenkins, AWS, and
            Kubernetes. I enjoy working in collaborative environments and am always
            eager to learn and contribute to meaningful projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
