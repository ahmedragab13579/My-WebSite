import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to a backend service
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white" size={24} />,
      title: "Email",
      value: "ahmed.ragab@example.com",
      href: "mailto:ahmed.ragab@example.com",
    },
    {
      icon: <Linkedin className="text-white" size={24} />,
      title: "LinkedIn",
      value: "Ahmed Ragab",
      href: "https://linkedin.com/in/ahmedragab",
    },
    {
      icon: <Github className="text-white" size={24} />,
      title: "GitHub",
      value: "ahmedragab13579",
      href: "https://github.com/ahmedragab13579",
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      title: "Location",
      value: "Sohag, Egypt",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-slide-up">
          Get In Touch
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto animate-slide-up">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out through any of the channels below.
        </p>

        <div className="grid md:grid-cols-2 gap-12 animate-slide-up">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-12">Contact Information</h3>

            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : "_self"}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : ""}
                className="flex items-start gap-4 group cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20 group-hover:bg-opacity-20 transition-all">
                  {info.icon}
                </div>
                <div>
                  <p className="font-semibold text-lg mb-1">{info.title}</p>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              </a>
            ))}

            {/* Quick Stats */}
            <div className="mt-12 pt-8 border-t border-white border-opacity-20">
              <p className="text-sm text-gray-400 mb-4">Available for</p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Full-time opportunities
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Freelance projects
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Collaborations & partnerships
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            {submitted ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-gray-300">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:bg-opacity-20 transition-all text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:bg-opacity-20 transition-all text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg focus:outline-none focus:bg-opacity-20 transition-all text-white placeholder-gray-400 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>

                {/* Note */}
                <p className="text-xs text-gray-400 text-center">
                  This is a frontend form. For production, integrate with a
                  backend service like Formspree, EmailJS, or your own API.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
