import React from "react";
import { ServerIcon, LockIcon } from "./Icons";

export default function Skills() {
  const skillCategories = [
    {
      name: "Backend Development",
      Icon: ServerIcon,
      bgColor: "bg-gradient-to-br from-navy-900 to-black",
      skills: [
        "C# & .NET Core",
        "ASP.NET Web API",
        "ASP.NET MVC",
        "SQL Server",
        "Entity Framework",
        "Redis Caching",
        "RabbitMQ",
      ],
    },
    {
      name: "Security & DevOps",
      Icon: LockIcon,
      bgColor: "bg-gradient-to-br from-black to-navy-900",
      skills: [
        "Cybersecurity",
        "OWASP Principles",
        "Authentication",
        "Data Encryption",
        "Network Security",
        "Security Testing",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-8 animate-slide-up max-w-4xl mx-auto">
          {skillCategories.map((category, idx) => (
            <section
              key={category.name}
              className={`${category.bgColor} rounded-lg p-6 text-white shadow-luxury transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <category.Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold">{category.name}</h3>
              </div>

              <ul className="space-y-4">
                {category.skills.map((skillName, i) => (
                  <li key={skillName} className="">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-sm">{skillName}</span>
                      <span className="text-xs font-bold text-gray-300">—</span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-white h-full rounded-full"
                        style={{ width: `${60 + (i % 5) * 6}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 animate-fade-in">
          {[
            { label: "Languages Known", value: "2" },
            { label: "Years of Experience", value: "2+" },
            { label: "Projects Delivered", value: "5+" },
            { label: "Certifications", value: "37+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="card-luxury p-6 text-center hover:shadow-luxury transition-all duration-300"
            >
              <p className="text-3xl font-bold text-navy-900 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
