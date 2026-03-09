import React from "react";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable E-Commerce Backends with .NET and Redis",
      excerpt:
        "Explore advanced caching strategies, asynchronous processing with RabbitMQ, and database optimization techniques for high-traffic platforms.",
      category: "Backend Development",
      author: "Ahmed Ragab",
      date: "Coming Soon",
      readTime: "8 min read",
      tags: ["C#", "Redis", "RabbitMQ", "Performance"],
    },
    {
      id: 2,
      title: "Security Best Practices in Web Application Development",
      excerpt:
        "A comprehensive guide to implementing authentication, authorization, encryption, and protecting against common OWASP vulnerabilities.",
      category: "Security",
      author: "Ahmed Ragab",
      date: "Coming Soon",
      readTime: "10 min read",
      tags: ["Security", "OWASP", "Authentication", "Encryption"],
    },
    {
      id: 3,
      title: "Bridging Navigation Science and Software Engineering",
      excerpt:
        "How principles from Navigation Science translate to building robust, reliable, and user-centric software systems.",
      category: "Insights",
      author: "Ahmed Ragab",
      date: "Coming Soon",
      readTime: "6 min read",
      tags: ["Career", "Engineering", "Innovation"],
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Technical Blog</h2>

        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-slide-up">
          Stay updated with insights on backend development, cybersecurity best
          practices, and the intersection of software engineering with
          navigation science.
        </p>

        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          {blogPosts.map((post, idx) => (
            <article
              key={idx}
              className="card-luxury overflow-hidden hover:shadow-luxury-lg transition-all duration-300 flex flex-col group"
            >
              {/* Category Badge */}
              <div className="px-6 pt-6">
                <span className="inline-block bg-navy-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 px-6 py-4">
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Meta Information */}
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">{post.readTime}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs bg-luxury-light text-navy-900 px-2 py-1 rounded border border-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <button className="w-full flex items-center justify-center gap-2 text-navy-900 font-semibold hover:text-black transition-colors group-hover:gap-3">
                  Read Article{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-12 bg-gradient-to-r from-navy-900 to-black rounded-lg p-8 text-center text-white animate-fade-in">
          <h3 className="text-2xl font-bold mb-3">Articles Coming Soon</h3>
          <p className="text-gray-300 mb-6">
            Deep-dive technical articles are being prepared. Subscribe to stay
            updated with the latest insights.
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md text-navy-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-navy-900 font-semibold rounded-md hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
