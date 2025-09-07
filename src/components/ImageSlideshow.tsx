'use client';

import { useState, useEffect } from 'react';

// Local images for slideshow
const slideshowImages = [
  {
    id: 1,
    src: '/images/0r7v2dplfrkf1.jpeg',
    alt: 'F1 car racing',
    title: 'Pure Adrenaline',
    subtitle: 'Feel the raw power and speed that defines Formula 1'
  },
  {
    id: 2,
    src: '/images/57zj8oixg8t91.jpg',
    alt: 'F1 circuit',
    title: 'The Ultimate Challenge',
    subtitle: 'Where legends are born and dreams become reality'
  },
  {
    id: 3,
    src: '/images/5nbnmjaguss91.jpg',
    alt: 'F1 driver',
    title: 'Champions Rise',
    subtitle: 'Witness the passion and determination of racing heroes'
  },
  {
    id: 4,
    src: '/images/7dg1qqpbvh251.webp',
    alt: 'F1 pit stop',
    title: 'Split-Second Drama',
    subtitle: 'Every moment counts in the pursuit of victory'
  },
  {
    id: 5,
    src: '/images/bd7x89nz4abf1.jpeg',
    alt: 'F1 car detail',
    title: 'Engineering Perfection',
    subtitle: 'Where technology meets the human spirit'
  },
  {
    id: 6,
    src: '/images/cwuivmavz5o31.jpg',
    alt: 'F1 track',
    title: 'The Greatest Show',
    subtitle: 'Experience the spectacle that captivates millions'
  }
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Image change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Independent text change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Current Image */}
      <div className="absolute inset-0">
        <img
          src={slideshowImages[currentImageIndex].src}
          alt={slideshowImages[currentImageIndex].alt}
          className="absolute inset-0 w-full h-full object-cover z-0"
          onLoad={() => console.log('Slideshow image loaded:', slideshowImages[currentImageIndex].src)}
          onError={(e) => console.error('Slideshow image failed:', slideshowImages[currentImageIndex].src, e)}
        />
      </div>
      
      {/* Text Content - Independent of Images */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 relative z-20">
          {/* Title - Changes with slideshow */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            {slideshowImages[currentTextIndex].title}
          </h1>
          
          {/* Subtitle - Changes with slideshow */}
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
            {slideshowImages[currentTextIndex].subtitle}
          </p>
          
          {/* CTA Button - Static, exempt from slideshow */}
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Explore Gallery
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
