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
    <section id="skills" className="py-20 px-4 bg-luxury-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className={`${category.bgColor} rounded-xl p-6 text-white shadow-luxury`}
            >
              <div className="flex items-center gap-4 mb-6">
                <category.Icon
                  className="p-2 bg-white/10 rounded-lg"
                  size={40}
                />
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              {/* تبسيط القائمة لتقليل العناصر */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
