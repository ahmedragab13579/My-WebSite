import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/ahmedragab13579",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/ahmedragab",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:ahmed.ragab@example.com",
      label: "Email",
    },
  ];

  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-luxury-dark text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold gradient-text mb-3">Ahmed Ragab</p>
            <p className="text-gray-200">
              Full Stack .NET Developer & Cybersecurity Enthusiast building
              secure, scalable digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.slice(0, 3).map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {links.slice(3).map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-10 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-200 text-sm text-center md:text-left">
            <p>
              © {currentYear} Ahmed Ragab. All rights reserved. | Built with
              React & Tailwind CSS
            </p>
            <p className="mt-2 text-xs">
              🚀 Deployed on Vercel | Crafted with ❤️ from Sohag, Egypt
            </p>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg hover:bg-opacity-20 transition-all duration-300 text-sm font-medium"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="mt-12 pt-8 border-t border-white border-opacity-10">
        <p className="text-center text-gray-200 text-xs">
          "Excellence is not a skill, it's a habit." - Aristotle
        </p>
      </div>
    </footer>
  );
}
