"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [  
  {
  title: "Skills",
  id: "skills",
  content: (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 text-center">
      {[
        {
          src: "https://www.saagie.com/wp-content/uploads/elementor/thumbs/Bash-q3vwhhx7mhmqnccs9u8ukoalpdg5c48vkxo3uvvuo0.png",
          label: "Bash",
        },
        {
          src: "https://i0.wp.com/build5nines.com/wp-content/uploads/2024/05/GitHub_Actions_Featured_Image_2024.jpg?fit=1200%2C675&ssl=1",
          label: "GitHub Actions",
        },
        {
          src: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",
          label: "Jenkins",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          label: "Docker",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
          label: "Kubernetes",
        },
        {
          src: "https://miro.medium.com/v2/resize:fit:1400/1*neG4D9C8UcJvNn6bverfIA.png",
          label: "AWS",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
          label: "Azure",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/512px-Oracle_logo.svg.png",
          label: "Oracle Cloud",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          label: "React",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          label: "Node.js",
        },
        {
          src: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
          label: "Express",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          label: "MongoDB",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          label: "MySQL",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          label: "Python",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          label: "Linux",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
          label: "Nginx",
        },
      ].map((skill, index) => (
        <div key={index} className="flex flex-col items-center opacity-90 hover:opacity-100 transition-opacity">
          <img
            src={skill.src}
            alt={skill.label}
            width={40}
            height={40}
            className="mb-2"
          />
          <p className="text-sm text-gray-300">{skill.label}</p>
        </div>
      ))}
    </div>
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
          { src: "/badges/badge6.png", label: "Microsoft AI Skills Fest" },
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
