'use client';

import { useState } from 'react';

// Local image data
const sampleImages = [
  {
    id: 1,
    src: '/images/0r7v2dplfrkf1.jpeg',
    alt: 'Beautiful landscape',
    title: 'Mountain Vista',
    category: 'Nature',
    uploadDate: '2024-01-15'
  },
  {
    id: 2,
    src: '/images/57zj8oixg8t91.jpg',
    alt: 'Urban architecture',
    title: 'City Architecture',
    category: 'Urban',
    uploadDate: '2024-01-14'
  },
  {
    id: 3,
    src: '/images/5nbnmjaguss91.jpg',
    alt: 'Ocean waves',
    title: 'Ocean Waves',
    category: 'Nature',
    uploadDate: '2024-01-13'
  },
  {
    id: 4,
    src: '/images/7dg1qqpbvh251.webp',
    alt: 'Abstract art',
    title: 'Abstract Expression',
    category: 'Abstract',
    uploadDate: '2024-01-12'
  },
  {
    id: 5,
    src: '/images/bd7x89nz4abf1.jpeg',
    alt: 'Forest path',
    title: 'Forest Path',
    category: 'Nature',
    uploadDate: '2024-01-11'
  },
  {
    id: 6,
    src: '/images/cwuivmavz5o31.jpg',
    alt: 'Modern building',
    title: 'Modern Design',
    category: 'Urban',
    uploadDate: '2024-01-10'
  },
  {
    id: 7,
    src: '/images/fmx4sexy53n71.jpg',
    alt: 'Desert dunes',
    title: 'Desert Landscape',
    category: 'Nature',
    uploadDate: '2024-01-09'
  },
  {
    id: 8,
    src: '/images/g91cgpuo9hmf1.jpeg',
    alt: 'Street art',
    title: 'Urban Art',
    category: 'Urban',
    uploadDate: '2024-01-08'
  },
  {
    id: 9,
    src: '/images/j4s0c9cku6z51.jpg',
    alt: 'Geometric patterns',
    title: 'Geometric Design',
    category: 'Abstract',
    uploadDate: '2024-01-07'
  },
  {
    id: 10,
    src: '/images/qx4y0k08w0if1.jpeg',
    alt: 'Waterfall',
    title: 'Cascading Falls',
    category: 'Nature',
    uploadDate: '2024-01-06'
  },
  {
    id: 11,
    src: '/images/rw3rua0emh371.jpg',
    alt: 'Scenic view',
    title: 'Beautiful Scene',
    category: 'Nature',
    uploadDate: '2024-01-05'
  }
];

export default function ImageManager() {
  const [images, setImages] = useState(sampleImages);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Nature', 'Urban', 'Abstract', 'Portrait', 'Landscape'];
  
  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  const toggleImageSelection = (id: number) => {
    setSelectedImages(prev => 
      prev.includes(id) 
        ? prev.filter(imgId => imgId !== id)
        : [...prev, id]
    );
  };

  const deleteSelectedImages = () => {
    if (selectedImages.length === 0) return;
    
    if (confirm(`Are you sure you want to delete ${selectedImages.length} image(s)?`)) {
      setImages(prev => prev.filter(img => !selectedImages.includes(img.id)));
      setSelectedImages([]);
    }
  };

  const deleteImage = (id: number) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setImages(prev => prev.filter(img => img.id !== id));
      setSelectedImages(prev => prev.filter(imgId => imgId !== id));
    }
  };

  return (
    <div className="space-y-4">
      {/* Filter and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <label htmlFor="category-filter" className="text-sm font-medium text-gray-700">
            Filter:
          </label>
          <select
            id="category-filter"
            className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {selectedImages.length > 0 && (
          <button
            onClick={deleteSelectedImages}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm"
          >
            Delete Selected ({selectedImages.length})
          </button>
        )}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className={`relative border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${
              selectedImages.includes(image.id)
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => toggleImageSelection(image.id)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-32 object-cover"
            />
            
            {/* Selection Checkbox */}
            <div className="absolute top-2 left-2">
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                selectedImages.includes(image.id)
                  ? 'bg-blue-500 border-blue-500'
                  : 'bg-white border-gray-300'
              }`}>
                {selectedImages.includes(image.id) && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>

            {/* Delete Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteImage(image.id);
              }}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2">
              <div className="text-xs font-medium truncate">{image.title}</div>
              <div className="text-xs opacity-75">{image.category}</div>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-2">No images found</p>
        </div>
      )}

      {/* Stats */}
      <div className="text-sm text-gray-600 pt-4 border-t">
        <p>Total images: {images.length}</p>
        <p>Filtered: {filteredImages.length}</p>
        {selectedImages.length > 0 && (
          <p>Selected: {selectedImages.length}</p>
        )}
      </div>
    </div>
  );
}
