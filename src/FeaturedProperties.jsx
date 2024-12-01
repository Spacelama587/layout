import React, { useState } from 'react';
import { Home, Building2 } from 'lucide-react'; // Import icons
import './FeaturedProperties.css'; // Import any custom CSS (optional)

const properties = {
  residential: [
    {
      id: 1,
      title: "Modern Apartment in Sydney",
      description: "A luxurious 2-bedroom apartment in the heart of Sydney.",
      image: "https://images.unsplash.com/photo-1606586243855-a9d9c41526cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Sydney",
    },
    {
      id: 2,
      title: "Beachside Townhouse",
      description: "Enjoy serene ocean views from this 3-bedroom townhouse.",
      image: "https://plus.unsplash.com/premium_photo-1687710306879-4b89184cc420?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Gold Coast",
    },
    {
      id: 3,
      title: "Rustic Countryside Cottage",
      description: "A cozy escape in the beautiful countryside.",
      image: "https://images.unsplash.com/photo-1636807614748-cb032d56f5cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Tasmania",
    },
  ],
  commercial: [
    {
      id: 4,
      title: "Prime Commercial Office",
      description: "A spacious and modern office in Melbourne's CBD.",
      image: "https://images.unsplash.com/photo-1723901832052-509aae2cbd8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Melbourne",
    },
    {
      id: 5,
      title: "Urban Warehouse Space",
      description: "Perfect for storage or a growing business in Darwin.",
      image: "https://plus.unsplash.com/premium_photo-1687402901153-bbf33855900b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Darwin",
    },
    {
      id: 6,
      title: "Spacious Retail Space",
      description: "Prime retail location in the heart of Brisbane.",
      image: "https://images.unsplash.com/photo-1607782984048-fb7edc0f3cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Brisbane",
    },
  ],
};

const FeaturedProperties = () => {
  const [searchType, setSearchType] = useState('residential');

  return (
    <section className="featured-properties bg-blue-50 p-8">
      <h2 className="text-center text-2xl font-semibold text-blue-600 mb-6">
        Featured Properties
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-6">
        <div className="bg-white/20 rounded-full p-1 flex space-x-2">
          <button
            onClick={() => setSearchType('residential')}
            className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
              searchType === 'residential'
                ? 'bg-white text-blue-600'
                : 'text-blue-600 hover:bg-white/10'
            }`}
          >
            <Home className="mr-2" /> Residential
          </button>
          <button
            onClick={() => setSearchType('commercial')}
            className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
              searchType === 'commercial'
                ? 'bg-white text-blue-600'
                : 'text-blue-600 hover:bg-white/10'
            }`}
          >
            <Building2 className="mr-2" /> Commercial
          </button>
        </div>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties[searchType].map((property) => (
          <div
            key={property.id}
            className="property-card bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-600">
                {property.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{property.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{property.location}</span>
                <button className="text-blue-600 font-medium hover:underline">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
