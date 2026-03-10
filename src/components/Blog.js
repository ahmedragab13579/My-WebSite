import React from "react";
import { Github } from "lucide-react";

export default function Blog() {
  const highlightRepos = [
    {
      name: "E-Commerce Backend (.NET)",
      description:
        "Scalable RESTful API with authentication, role-based access, and SQL Server.",
      tech: [".NET", "C#", "SQL Server", "JWT"],
      url: "https://github.com/ahmedragab13579",
    },
    {
      name: "Security Labs & Playgrounds",
      description:
        "Hands-on security exercises inspired by Google Cybersecurity specialization.",
      tech: ["Linux", "Security", "SIEM"],
      url: "https://github.com/ahmedragab13579",
    },
    {
      name: "Algorithms & Data Structures",
      description:
        "Collection of problem-solving exercises in C# and Python from courses and practice.",
      tech: ["C#", "Python", "DSA"],
      url: "https://github.com/ahmedragab13579",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">GitHub & Open Source</h2>

        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-slide-up">
          Instead of placeholder blog posts, here’s a snapshot of my real
          projects and GitHub activity.
        </p>

        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          {highlightRepos.map((repo) => (
            <article
              key={repo.name}
              className="card-luxury overflow-hidden hover:shadow-luxury-lg transition-all duration-300 flex flex-col group"
            >
              <div className="px-6 pt-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                  {repo.name}
                </h3>
                <Github className="text-navy-900" size={20} />
              </div>

              <div className="flex-1 px-6 pb-4">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {repo.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-luxury-light text-navy-900 px-2 py-1 rounded border border-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-navy-900 font-semibold hover:text-black transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-navy-900 to-black rounded-lg p-8 text-center text-white animate-fade-in">
          <h3 className="text-2xl font-bold mb-3">See More on GitHub</h3>
          <p className="text-gray-300 mb-6">
            Explore repositories, contributions, and ongoing experiments on my
            GitHub profile.
          </p>
          <a
            href="https://github.com/ahmedragab13579"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-navy-900 font-semibold rounded-md hover:bg-gray-100 transition-colors"
          >
            <Github size={20} />
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
