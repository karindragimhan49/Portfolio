"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import credly from "../../../public/credly.svg";
import fb from "../../../public/fb.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nclba1n",     // Replace with your actual Service ID
        "template_lu9ekda",    // Replace with your actual Template ID
        form.current,
        "M_h5MxvCDbJvT76NN"      // Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setEmailSubmitted(true);
        },
        (error) => {
          console.error("Email sending error:", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e3a8a] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#B0C4DE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. My inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/karindragimhan49">
            <Image src={GithubIcon} alt="Github Icon" width={32} height={32} />
          </Link>
          <Link href="https://www.linkedin.com/in/karindragimhan49/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={32} height={32} />
          </Link>
          <Link href="https://www.credly.com/users/karindragimhan49">
            <Image src={credly} alt="Credly Icon" width={32} height={32} />
          </Link>
          <Link href="https://www.facebook.com/">
            <Image src={fb} alt="Facebook Icon" width={32} height={32} />
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let&apos;s talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] hover:opacity-90 text-white font-medium py-2.5 px-5 rounded-lg w-full transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
