"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import NavLink from "./NavLink"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay"

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-[#0c1220]/95 backdrop-blur-md shadow-lg" : "bg-[#0c1220] border-b border-[#1e3a5f]/30"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={"/"} className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  <NavLink href={link.path} title={link.title} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
              <li>
  <Link href="/#contact">
    <button className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-800 to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#121212]">
      Hire Me
    </button>
  </Link>
</li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#33353F] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200"
              aria-expanded={navbarOpen}
            >
              <span className="sr-only">Open main menu</span>
              {navbarOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          navbarOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {navbarOpen && <MenuOverlay links={navLinks} />}
      </div>
    </nav>
  )
}

export default Navbar
