import React from "react";
import { Download, ExternalLink } from "lucide-react";

export default function Hero() {
  const handleDownloadCV = () => {
    const cvUrl = "/CV/AhmedCv (6).pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "AhmedCv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-900 via-navy-800 to-black text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <p className="text-luxury-light text-lg mb-4 font-light">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ahmed Ragab.
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              Backend .NET Developer | Navigation Science Student |
              Cybersecurity Enthusiast
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              21-year-old Navigation Science student from Sohag, Egypt.
              Passionate about building robust backend systems with .NET,
              securing digital infrastructure, and crafting seamless user
              experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleDownloadCV}
                className="px-8 py-4 bg-white text-navy-900 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Download size={20} />
                Download CV
              </button>
              <a
                href="https://github.com/ahmedragab13579"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <ExternalLink size={20} />
                View GitHub
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20">
                <p className="text-2xl font-bold">5+</p>
                <p className="text-sm text-gray-300">Projects</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20">
                <p className="text-2xl font-bold">37+</p>
                <p className="text-sm text-gray-300">Certifications</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20">
                <p className="text-2xl font-bold">7+</p>
                <p className="text-sm text-gray-300">Tech Skills</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Decorative circles */}
              <div className="absolute w-96 h-96 bg-gradient-to-r from-white to-gray-400 opacity-5 rounded-full blur-3xl"></div>
              <div className="absolute w-72 h-72 bg-gradient-to-r from-gray-400 to-gray-600 opacity-5 rounded-full blur-3xl top-20 left-20"></div>

              {/* Profile Card */}
              <div className="relative z-10 bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-20 rounded-2xl p-8 w-full max-w-sm">
                <div className="absolute inset-0 opacity-20 mix-blend-soft-light pointer-events-none bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,_transparent_0)] [background-size:4px_4px] rounded-2xl"></div>
                <div className="w-full aspect-square bg-gradient-to-br from-navy-900 to-black rounded-full mb-6 flex items-center justify-center overflow-hidden relative">
                  <img
                    src="/Images/Avatar/4.jpg"
                    alt="Ahmed Ragab"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
                    AR
                  </span>
                </div>
                <p className="text-white font-semibold text-lg">Ahmed Ragab</p>
                <p className="text-gray-300 text-sm">Backend Developer</p>
                <div className="mt-6 space-y-2">
                  <p className="text-xs text-gray-400">📍 Sohag, Egypt</p>
                  <p className="text-xs text-gray-400">
                    🎓 Navigation Science Student
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
