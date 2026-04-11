import React, { useEffect, lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Batch DOM writes in requestAnimationFrame to avoid layout thrashing
        const toReveal = [];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            toReveal.push(entry);
          }
        });

        if (toReveal.length > 0) {
          window.requestAnimationFrame(() => {
            toReveal.forEach((entry) => {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            });
          });
        }
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(
      ".animate-slide-up, .animate-fade-in",
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-luxury-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<div className="py-20">Loading projects...</div>}>
          <Experience />
        </Suspense>
        <Skills />
        <Certifications />
        <Blog />
        <Suspense fallback={<div className="py-20">Loading contact...</div>}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
