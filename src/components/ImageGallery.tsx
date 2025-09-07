'use client';

import { useState } from 'react';
import Image from 'next/image';

// Local image data
const sampleImages = [
  {
    id: 1,
    src: '/images/0r7v2dplfrkf1.jpeg',
    alt: 'F1 car racing',
    title: 'Thunder & Lightning',
    category: 'F1 Teams'
  },
  {
    id: 2,
    src: '/images/57zj8oixg8t91.jpg',
    alt: 'F1 circuit',
    title: 'The Crown Jewel',
    category: 'F1 Circuits'
  },
  {
    id: 3,
    src: '/images/5nbnmjaguss91.jpg',
    alt: 'F1 driver',
    title: 'Racing Royalty',
    category: 'F1 Drivers'
  },
  {
    id: 4,
    src: '/images/7dg1qqpbvh251.webp',
    alt: 'F1 pit stop',
    title: 'Lightning Fast',
    category: 'F1 Action'
  },
  {
    id: 5,
    src: '/images/bd7x89nz4abf1.jpeg',
    alt: 'F1 car detail',
    title: 'Scuderia Passion',
    category: 'F1 Teams'
  },
  {
    id: 6,
    src: '/images/cwuivmavz5o31.jpg',
    alt: 'F1 track',
    title: 'Home of Heroes',
    category: 'F1 Circuits'
  },
  {
    id: 7,
    src: '/images/fmx4sexy53n71.jpg',
    alt: 'F1 start',
    title: 'The Rush Begins',
    category: 'F1 Action'
  },
  {
    id: 8,
    src: '/images/g91cgpuo9hmf1.jpeg',
    alt: 'F1 driver helmet',
    title: 'Champion Spirit',
    category: 'F1 Drivers'
  },
  {
    id: 9,
    src: '/images/j4s0c9cku6z51.jpg',
    alt: 'F1 car aerodynamics',
    title: 'Aerodynamic Art',
    category: 'F1 Technology'
  },
  {
    id: 10,
    src: '/images/qx4y0k08w0if1.jpeg',
    alt: 'F1 podium',
    title: 'Victory Rush',
    category: 'F1 Action'
  },
  {
    id: 11,
    src: '/images/rw3rua0emh371.jpg',
    alt: 'F1 car close-up',
    title: 'Silver Arrow',
    category: 'F1 Teams'
  }
];

const categories = ['All', 'F1 Teams', 'F1 Circuits', 'F1 Drivers', 'F1 Action', 'F1 Technology'];

export default function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof sampleImages[0] | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? sampleImages 
    : sampleImages.filter(img => img.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg dark:shadow-gray-800/50 group-hover:shadow-xl dark:group-hover:shadow-gray-700/50 transition-shadow">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                onLoad={() => console.log('Gallery image loaded:', image.src)}
                onError={(e) => console.error('Gallery image failed:', image.src, e)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold mb-1">{selectedImage.title}</h3>
              <p className="text-lg opacity-90">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
