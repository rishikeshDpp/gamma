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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 100); // Small delay to ensure smooth transition
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    if (index !== currentImageIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        setIsTransitioning(false);
      }, 100);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slideshow Images */}
      {slideshowImages.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover z-0"
            onLoad={() => console.log('Slideshow image loaded:', image.src)}
            onError={(e) => console.error('Slideshow image failed:', image.src, e)}
          />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white px-4 relative z-20">
              <h1 className={`text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg transition-all duration-1000 ${
                index === currentImageIndex && !isTransitioning 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}>
                {image.title}
              </h1>
              <p className={`text-xl md:text-2xl mb-8 drop-shadow-lg transition-all duration-1000 delay-300 ${
                index === currentImageIndex && !isTransitioning 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}>
                {image.subtitle}
              </p>
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className={`bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-1000 delay-600 shadow-lg ${
                  index === currentImageIndex && !isTransitioning 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                Explore Gallery
              </button>
            </div>
          </div>
        </div>
      ))}

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
