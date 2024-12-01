import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, Building2 } from 'lucide-react';

const RealEstateHero = ({style}) => {
  const [searchType, setSearchType] = useState('residential');
  const [searchParams, setSearchParams] = useState({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic or redirect
    console.log('Search Parameters:', searchParams);
  };

  return (
    <div className="relative h-[80vh] w-full bg-cover bg-center flex items-center justify-center text-white"  style={style} >
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-4xl px-4"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Find Your Perfect Property in Australia
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover homes and commercial spaces across Australia with us!
          </p>
        </div>

        {/* Property Type Toggle */}
      

       
      </motion.div>
    </div>
  );
};

export default RealEstateHero;