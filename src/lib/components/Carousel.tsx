import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface CarouselProps {
  images: string[];
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={twMerge("flex items-center justify-center gap-2", className)}
    >
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="px-3 py-2 rounded-md border shadow bg-background/80 backdrop-blur-sm hover:bg-muted transition cursor-pointer"
      >
        <ChevronLeft className="w-5 h-10 text-foreground" />
      </button>

      {/* Carousel Image Container */}
      <div className="relative w-full max-w-xl aspect-video rounded-xl overflow-hidden">
        {/* Image Slider */}
        <div className="w-full h-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 h-full"
                style={{ width: "100%" }}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="px-3 py-2 rounded-md border shadow bg-background/80 backdrop-blur-sm hover:bg-muted transition cursor-pointer"
      >
        <ChevronRight className="w-5 h-10 text-foreground" />
      </button>
    </div>
  );
};
