import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 bg-luxury-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 shadow-luxury-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold gradient-text">
          AR
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-navy-900 font-medium hover:text-navy-700 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/ahmedragab13579"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-navy-900"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-luxury-white border-b border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-navy-900 font-medium hover:text-navy-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://github.com/ahmedragab13579"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block text-center text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
