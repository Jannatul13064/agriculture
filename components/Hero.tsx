"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    img: "images/slider/hero1.jpg",
    title: "Agricultural Information Hub",
    subtitle: "Empowering farmers with knowledge and technology",
    button: "Explore Guides",
    link: "/guides",
  },
  {
    img: "images/slider/hero2.jpg",
    title: "Sustainable Farming Tips",
    subtitle: "Learn eco-friendly practices for a better tomorrow",
    button: "View Guides",
    link: "/guides",
  },
  {
    img: "images/slider/hero3.jpg",
    title: "Crop & Pest Management",
    subtitle: "Get expert advice to maximize your yield",
    button: "Discover More",
    link: "/guides",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[300px] md:h-[500px] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-95 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            {/* Glass background */}
            <div className="bg-opacity-75 backdrop-blur-lg border border-white border-opacity-30 shadow-lg px-6 pb-8 rounded-xl max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 py-2">
                {slide.title}
              </h1>
              <p className="mt-3 text-base md:text-lg text-gray-200">
                {slide.subtitle}
              </p>
              <a
                href={slide.link}
                className="mt-5 inline-block bg-green-600 bg-opacity-80 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition"
              >
                {slide.button}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-green-600" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
}
