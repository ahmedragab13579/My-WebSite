import React from "react";
import { Code, Server, Lock, Database } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      name: "Backend Development",
      icon: <Server className="text-white" size={32} />,
      bgColor: "bg-gradient-to-br from-navy-900 to-black",
      skills: [
        { name: "C# & .NET Core", level: 90 },
        { name: "ASP.NET Web API", level: 88 },
        { name: "ASP.NET MVC", level: 85 },
        { name: "SQL Server", level: 88 },
        { name: "Entity Framework", level: 87 },
        { name: "Redis Caching", level: 82 },
        { name: "RabbitMQ", level: 80 },
      ],
    },
    {
      name: "Frontend Development",
      icon: <Code className="text-white" size={32} />,
      bgColor: "bg-gradient-to-br from-navy-800 to-navy-900",
      skills: [
        { name: "React.js", level: 85 },
        { name: "JavaScript", level: 84 },
        { name: "Tailwind CSS", level: 88 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 87 },
        { name: "Responsive Design", level: 89 },
      ],
    },
    {
      name: "Security & DevOps",
      icon: <Lock className="text-white" size={32} />,
      bgColor: "bg-gradient-to-br from-black to-navy-900",
      skills: [
        { name: "Cybersecurity", level: 86 },
        { name: "OWASP Principles", level: 82 },
        { name: "Authentication", level: 84 },
        { name: "Data Encryption", level: 81 },
        { name: "Network Security", level: 79 },
        { name: "Security Testing", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`${category.bgColor} rounded-lg p-8 text-white shadow-luxury hover:shadow-luxury-lg transition-all duration-300 transform hover:scale-105`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.name}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs font-bold text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-white h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 animate-fade-in">
          {[
            { label: "Languages Known", value: "2" },
            { label: "Years of Experience", value: "2+" },
            { label: "Projects Delivered", value: "5+" },
            { label: "Certifications", value: "3+" },
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
