import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const images = [
  './images/paris.jpg',
  './images/tokyo.jpg',
  './images/maldives.jpg',
  './images/dubai.jpg'
]

const Carousel = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-[700px] overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`Slide ${current}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
