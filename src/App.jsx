import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Home, Filter, Bed, DollarSign, MapPin, Building2 } from 'lucide-react';
import Navbar from './Navbar';
import RealEstateHero from './RealEstateHero';
import FeaturedProperties from './FeaturedProperties';

// Mapbox token stored directly in the code (for demo purposes)
const MAPBOX_TOKEN = 'pk.eyJ1IjoidmlqaXRoMiIsImEiOiJjbHgza2x3NzIxMGtzMmtxeGJrbGRjaWQ1In0.VQ7aPM20Q14NF8siwEKQuQ';

// Dummy property data
const dummyProperties = [
  {
    id: 1,
    title: "Modern Apartment in Sydney CBD",
    type: "residential",
    bedrooms: 2,
    bathrooms: 2,
    price: 650,
    priceType: "weekly",
    location: "Sydney",
    coordinates: [-33.8688, 151.2093],
    image: "https://plus.unsplash.com/premium_photo-1661876567457-d9bd96f4b67f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Spacious Commercial Office Space",
    type: "commercial",
    area: 200,
    price: 1200,
    priceType: "weekly",
    location: "Melbourne",
    coordinates: [-37.8136, 144.9631],
    image: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Beachside Townhouse",
    type: "residential",
    bedrooms: 3,
    bathrooms: 2,
    price: 850,
    priceType: "weekly",
    location: "Gold Coast",
    coordinates: [-28.0167, 153.4000],
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Luxury Villa with Pool",
    type: "residential",
    bedrooms: 4,
    bathrooms: 3,
    price: 1500,
    priceType: "weekly",
    location: "Perth",
    coordinates: [-31.9505, 115.8605],
    image: "https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Luxury Villa with Pool",
    type: "residential",
    bedrooms: 4,
    bathrooms: 3,
    price: 1500,
    priceType: "weekly",
    location: "Perth",
    coordinates: [-31.9505, 115.8605],
    image: "https://images.unsplash.com/photo-1501635238895-63f29cfc06b3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    title: "Compact Studio Apartment",
    type: "residential",
    bedrooms: 1,
    bathrooms: 1,
    price: 350,
    priceType: "weekly",
    location: "Adelaide",
    coordinates: [-34.9285, 138.6007],
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dt"
  },
  {
    id: 6,
    title: "Prime Commercial Space",
    type: "commercial",
    area: 500,
    price: 2500,
    priceType: "monthly",
    location: "Brisbane",
    coordinates: [-27.4698, 153.0251],
    image: "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    title: "Rustic Countryside Cottage",
    type: "residential",
    bedrooms: 2,
    bathrooms: 1,
    price: 600,
    priceType: "weekly",
    location: "Tasmania",
    coordinates: [-42.8821, 147.3272],
    image: "https://plus.unsplash.com/premium_photo-1661964475795-f0cb85767a88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    title: "Urban Warehouse Space",
    type: "commercial",
    area: 800,
    price: 3200,
    priceType: "monthly",
    location: "Darwin",
    coordinates: [-12.4634, 130.8456],
    image: "https://plus.unsplash.com/premium_photo-1661890522087-42fca8eebbf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    title: "Secluded Mountain Cabin",
    type: "residential",
    bedrooms: 3,
    bathrooms: 2,
    price: 900,
    priceType: "weekly",
    location: "Blue Mountains",
    coordinates: [-33.6332, 150.5700],
    image: "https://images.unsplash.com/photo-1618168140141-e43458ee136a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 10,
    title: "Modern High-Rise Apartment",
    type: "residential",
    bedrooms: 3,
    bathrooms: 2,
    price: 1200,
    priceType: "weekly",
    location: "Sydney",
    coordinates: [-33.8688, 151.2093],
    image: "https://images.unsplash.com/photo-1605352081508-2e09927ecfe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 11,
    title: "Spacious Retail Space",
    type: "commercial",
    area: 300,
    price: 1800,
    priceType: "monthly",
    location: "Melbourne",
    coordinates: [-37.8136, 144.9631],
    image: "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 12,
    title: "Oceanview Penthouse",
    type: "residential",
    bedrooms: 3,
    bathrooms: 3,
    price: 2500,
    priceType: "weekly",
    location: "Gold Coast",
    coordinates: [-28.0167, 153.4000],
    image: "https://images.unsplash.com/photo-1618168139362-5d0575e6c024?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 13,
    title: "Cozy Suburban House",
    type: "residential",
    bedrooms: 4,
    bathrooms: 2,
    price: 700,
    priceType: "weekly",
    location: "Canberra",
    coordinates: [-35.2809, 149.1300],
    image: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// Horizontal Filters Component
const HorizontalFilters = ({ filters, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState(null);

  const filterSections = [
    {
      name: 'propertyType',
      label: 'Property Type',
      icon: <Filter className="mr-2" />,
      options: [
        { value: '', label: 'All Types' },
        { value: 'residential', label: 'Residential' },
        { value: 'commercial', label: 'Commercial' }
      ]
    },
    {
      name: 'minBedrooms',
      label: 'Bedrooms',
      icon: <Bed className="mr-2" />,
      options: [
        { value: 0, label: 'Any' },
        { value: 1, label: '1+' },
        { value: 2, label: '2+' },
        { value: 3, label: '3+' },
        { value: 4, label: '4+' }
      ]
    },
    {
      name: 'maxPrice',
      label: 'Price',
      icon: <DollarSign className="mr-2" />,
      options: [
        { value: 0, label: 'Any Price' },
        { value: 500, label: '$500/week' },
        { value: 1000, label: '$1000/week' },
        { value: 1500, label: '$1500/week' }
      ]
    },
    
  ];

  const toggleDropdown = (filterName) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-50 py-4 px-6 rounded-lg shadow-md"
    >
      <div className="flex flex-wrap justify-between items-center space-x-2 space-y-2">
        {filterSections.map((section) => (
          <div 
            key={section.name} 
            className="relative min-w-[200px]"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleDropdown(section.name)}
              className="w-full flex items-center justify-between 
                bg-white text-blue-800 px-4 py-2 rounded-lg 
                border border-blue-200 hover:bg-blue-100 
                transition-colors"
            >
              <span className="flex items-center">
                {section.icon}
                {section.label}
              </span>
              <span 
                className={`transform transition-transform 
                  ${activeFilter === section.name ? 'rotate-180' : ''}`}
              >
                ▼
              </span>
            </motion.button>
            
            {activeFilter === section.name && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute z-10 w-full mt-1 bg-white 
                  rounded-lg shadow-lg border border-blue-100 
                  overflow-hidden"
              >
                {section.options.map((option) => (
                  <motion.div
                    key={option.value}
                    whileHover={{ backgroundColor: '#EBF8FF' }}
                    onClick={() => {
                      onFilterChange({
                        target: { 
                          name: section.name, 
                          value: option.value 
                        }
                      });
                      setActiveFilter(null);
                    }}
                    className="px-4 py-2 cursor-pointer 
                      hover:bg-blue-50 transition-colors"
                  >
                    {option.label}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const RealEstateSearchApp = () => {
  const [filters, setFilters] = useState({
    propertyType: '',
    minBedrooms: 0,
    maxPrice: 0,
    location: ''
  });

  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredProperties = dummyProperties.filter(property => 
    (!filters.propertyType || property.type === filters.propertyType) &&
    (!filters.minBedrooms || (property.bedrooms || 0) >= filters.minBedrooms) &&
    (!filters.maxPrice || property.price <= filters.maxPrice)
  );

  return (
    <>
      <Navbar />
      <RealEstateHero 

        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1623564852823-b24f13d7f2e6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' 
        }}
      />
            <FeaturedProperties />
      {/* Horizontal Filters */}
      <div className="container mx-auto px-4 py-4">
        <HorizontalFilters 
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </div>

      <div className="flex h-screen">
        {/* Main Content Area with Properties and Map */}
        <div className="w-full flex">
          {/* Property Listings */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-1/2 p-6 overflow-y-auto"
          >
            <h2 className="text-xl font-bold mb-4">
              {filteredProperties.length} Properties Found
            </h2>
            {filteredProperties.map(property => (
              <motion.div 
                key={property.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProperty(property)}
                className="bg-white mb-4 rounded-lg shadow-md cursor-pointer p-4"
              >
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-bold text-lg">{property.title}</h3>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-600 flex items-center">
                    <MapPin className="mr-1 text-blue-500" size={16} /> 
                    {property.location}
                  </span>
                  <span className="font-semibold">
                    ${property.price}/{property.priceType}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Map */}
          <div className="w-1/2 relative">
            <Map
              initialViewState={{
                latitude: -25.2744,
                longitude: 133.7751,
                zoom: 4
              }}
              style={{height: '100%'}}
              mapStyle="mapbox://styles/mapbox/light-v11"
              mapboxAccessToken={MAPBOX_TOKEN}
            >
              <NavigationControl position="top-right" />
              {filteredProperties.map(property => (
                <Marker
                  key={property.id}
                  longitude={property.coordinates[1]}
                  latitude={property.coordinates[0]}
                  onClick={() => setSelectedProperty(property)}
                >
                  <div className="bg-blue-500 text-white p-2 rounded-full">
                    <Building2 size={20} />
                  </div>
                </Marker>
              ))}
            </Map>
          </div>
        </div>

        {/* Property Details Modal (if a property is selected) */}
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white p-8 rounded-lg max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedProperty.image} 
                alt={selectedProperty.title} 
                className="w-full h-96 object-cover rounded-md mb-6"
              />
              <h2 className="text-2xl font-bold mb-4">{selectedProperty.title}</h2>
              <div className="grid grid-cols-2 gap-4">
                <p><strong>Type:</strong> {selectedProperty.type}</p>
                {selectedProperty.bedrooms && (
                  <p><strong>Bedrooms:</strong> {selectedProperty.bedrooms}</p>
                )}
                <p><strong>Price:</strong> ${selectedProperty.price}/{selectedProperty.priceType}</p>
                <p><strong>Location:</strong> {selectedProperty.location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default RealEstateSearchApp;