import { useState } from 'react';
import { galleryImages } from '../../data/hoaData';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'community', name: 'Community' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'events', name: 'Events' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neighborhood-blue mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore the beauty and community spirit of First River Farms through our photo collection.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-neighborhood-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-neighborhood-blue">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Images Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No photos found</h3>
            <p className="text-gray-600">Try selecting a different category.</p>
          </div>
        )}

        {/* Image Modal */}
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
              
              <img
                src={galleryImages.find(img => img.id === selectedImage)?.imageUrl}
                alt={galleryImages.find(img => img.id === selectedImage)?.title}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white bg-black bg-opacity-50 rounded-lg p-4">
                <h3 className="font-semibold text-lg">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-sm opacity-90">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-neighborhood-light rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-neighborhood-blue mb-4">
            Share Your Photos
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Have great photos of the community? Share them with us for the gallery!
          </p>
          <a
            href="mailto:firstriverfarmshoa@gmail.com?subject=Photo Submission for Gallery"
            className="inline-block bg-neighborhood-blue text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
          >
            Submit Photos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 