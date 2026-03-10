import React from "react";
import { BookOpen, Code, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center animate-slide-up">
          {/* Content */}
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm Ahmed Ragab, a 21-year-old Navigation Science student from
              Sohag, Egypt, with a profound passion for Software Engineering and
              Cybersecurity. My journey blends academic rigor with practical
              expertise, fostering a unique perspective on building secure,
              scalable digital solutions.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Through intensive training at ITI (Information Technology
              Institute), I've mastered Backend .NET Development, specializing
              in backend architecture, database design, and microservices
              patterns using Redis and RabbitMQ. I'm also a dedicated member of
              IEEE, contributing to projects that emphasize teamwork, quality
              assurance, and innovative problem-solving.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              My expertise in the Google Cybersecurity Professional Certificate
              equips me with profound knowledge of security protocols, risk
              management, and digital asset protection. I'm driven by the
              mission to create software that not only performs exceptionally
              but also stands resilient against evolving threats.
            </p>

            {/* Skills Highlight */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-luxury-sm border border-gray-200 hover:shadow-luxury transition-all duration-300">
                <Code className="text-navy-900 mb-3" size={32} />
                <p className="font-semibold text-navy-900 mb-1">Development</p>
                <p className="text-sm text-gray-600">.NET</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-luxury-sm border border-gray-200 hover:shadow-luxury transition-all duration-300">
                <Shield className="text-navy-900 mb-3" size={32} />
                <p className="font-semibold text-navy-900 mb-1">Security</p>
                <p className="text-sm text-gray-600">Cybersecurity Expert</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-luxury-sm border border-gray-200 hover:shadow-luxury transition-all duration-300">
                <BookOpen className="text-navy-900 mb-3" size={32} />
                <p className="font-semibold text-navy-900 mb-1">Education</p>
                <p className="text-sm text-gray-600">Navigation Science</p>
              </div>
            </div>
          </div>

          {/* Sidebar with Key Information */}
          <div className="space-y-8">
            {/* Language */}
            <div className="card-luxury p-8 border-l-4 border-navy-900">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Language</h3>
              <p className="text-gray-700 mb-2">English (B1 Level)</p>
              <p className="text-sm text-gray-600">
                Professional communication skills with a focus on technical
                documentation and collaborative teamwork.
              </p>
            </div>

            {/* Education */}
            <div className="card-luxury p-8 border-l-4 border-navy-900">
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Education
              </h3>
              <p className="text-gray-700 font-semibold mb-1">
                Navigation Science Student
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Sohag University, Egypt
              </p>
              <p className="text-gray-700 font-semibold mb-1">
                Backend .NET Development
              </p>
              <p className="text-sm text-gray-600">ITI Training Institute</p>
            </div>

            {/* Certifications Preview */}
            <div className="card-luxury p-8 border-l-4 border-navy-900">
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                Achievements
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-navy-900 font-bold mr-3">✓</span>
                  <span className="text-gray-700">
                    Google Cybersecurity Professional
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-900 font-bold mr-3">✓</span>
                  <span className="text-gray-700">
                    IEEE Member & Contributor
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-900 font-bold mr-3">✓</span>
                  <span className="text-gray-700">ITI Full Stack Graduate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
