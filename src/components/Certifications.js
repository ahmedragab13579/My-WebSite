import React, { useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { certificatesData, getCategories } from "../data/certificatesData";

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = getCategories();

  // Filter certificates based on selected category
  const filteredCertificates =
    selectedCategory === "All"
      ? certificatesData
      : certificatesData.filter((cert) => cert.category === selectedCategory);

  const handleViewCertificate = (pdfLink) => {
    window.open(pdfLink, "_blank");
  };

  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-light"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Certifications & Achievements</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-navy-900 text-white shadow-luxury"
                  : "bg-white text-navy-900 border-2 border-navy-900 hover:bg-navy-900 hover:text-white"
              }`}
            >
              {category}
              <span className="ml-2 text-sm">
                (
                {category === "All"
                  ? certificatesData.length
                  : certificatesData.filter((c) => c.category === category)
                      .length}
                )
              </span>
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="card-luxury overflow-hidden hover:shadow-luxury-lg transition-all duration-300 transform hover:scale-105 flex flex-col"
            >
              {/* Header with Icon */}
              <div
                className={`bg-gradient-to-br ${cert.color} p-6 text-white flex items-center justify-between`}
              >
                <div className="text-4xl">{cert.icon}</div>
                <span className="text-xs font-bold bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  {cert.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-navy-900 mb-3 line-clamp-2">
                  {cert.title}
                </h3>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-luxury-light text-navy-900 text-xs font-semibold px-3 py-1 rounded-full border border-navy-900">
                    {cert.category}
                  </span>
                </div>

                {/* Spacer */}
                <div className="flex-1"></div>

                {/* View Button */}
                <button
                  onClick={() => handleViewCertificate(cert.pdfLink)}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-navy-900 text-white rounded-md font-semibold hover:bg-black transition-all duration-300 w-full mt-4"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No certificates found in this category.
            </p>
          </div>
        )}

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 animate-fade-in">
          {[
            {
              number: certificatesData.length + "+",
              label: "Total Certifications",
            },
            { number: categories.length - 1, label: "Categories" },
            {
              number:
                certificatesData.filter((c) => c.category === "Backend")
                  .length + "+",
              label: "Backend Certs",
            },
            {
              number:
                certificatesData.filter((c) => c.category === "Security")
                  .length + "+",
              label: "Security Certs",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="card-luxury p-6 text-center hover:shadow-luxury transition-all duration-300"
            >
              <p className="text-3xl font-bold text-navy-900 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
