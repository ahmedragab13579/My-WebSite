import React from "react";
import {
  Github,
  ExternalLink,
  Database,
  MessageSquare,
  Users,
  CheckCircle,
} from "lucide-react";

export default function Experience() {
  const projects = [
    {
      title: "E-Commerce Platform",
      subtitle: "ITI Full Stack Training Project",
      role: "Backend Developer",
      description:
        "A comprehensive e-commerce solution built during ITI training, showcasing advanced backend architecture and microservices patterns.",
      highlights: [
        {
          icon: <Database className="text-navy-900" size={20} />,
          title: "Redis Caching",
          description:
            "Implemented intelligent caching layer for optimized performance and reduced database load.",
        },
        {
          icon: <MessageSquare className="text-navy-900" size={20} />,
          title: "RabbitMQ Integration",
          description:
            "Built asynchronous message processing for order management and notification systems.",
        },
        {
          icon: <CheckCircle className="text-navy-900" size={20} />,
          title: "API Architecture",
          description:
            "Designed RESTful APIs with proper error handling, validation, and scalability patterns.",
        },
      ],
      technologies: [
        "C#",
        "ASP.NET Core",
        "SQL Server",
        "Redis",
        "RabbitMQ",
        "Entity Framework",
      ],
      github: "https://github.com/ahmedragab13579/E-Commerce",
      year: "2025",
    },
    {
      title: "HR Management System",
      subtitle: "IEEE Beni Suef Project",
      role: "Backend Committee Member",
      description:
        "A robust HR system developed in collaboration with IEEE members, emphasizing quality testing and team collaboration.",
      highlights: [
        {
          icon: <Users className="text-navy-900" size={20} />,
          title: "Team Collaboration",
          description:
            "Worked in agile teams with clear communication, code reviews, and knowledge sharing sessions.",
        },
        {
          icon: <MessageSquare className="text-navy-900" size={20} />,
          title: "Email Integration",
          description:
            "Implemented SMTP-based email notifications for HR events, approvals, and communications.",
        },
        {
          icon: <CheckCircle className="text-navy-900" size={20} />,
          title: "Unit Testing",
          description:
            "Developed comprehensive test suites ensuring code reliability and system integrity.",
        },
      ],
      technologies: [
        "C#",
        "ASP.NET MVC",
        "SQL Server",
        "SMTP",
        "NUnit",
        "SOLID Principles",
      ],
      github: "https://github.com/IEEE-Beni-Suef/hr-system",
      year: "2026",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-luxury p-8 hover:shadow-luxury-lg transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-navy-900 bg-luxury-light px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">
                  Role: {project.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-8 space-y-4">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">{highlight.icon}</div>
                    <div>
                      <p className="font-semibold text-navy-900 mb-1">
                        {highlight.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-navy-900 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-luxury-light text-navy-900 text-xs font-medium px-3 py-1 rounded-full border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto pt-6 border-t border-gray-200">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-navy-900 text-white rounded-md font-semibold hover:bg-black transition-all duration-300"
                >
                  <Github size={16} />
                  View Code
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-navy-900 text-navy-900 rounded-md font-semibold hover:bg-navy-900 hover:text-white transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
