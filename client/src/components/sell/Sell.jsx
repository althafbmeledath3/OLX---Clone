import React, { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Cars', icon: '🚗', subcategories: ['Cars'] },
  { name: 'Bikes', icon: '🚲', subcategories: ['Bikes'] },
  {
    name: 'Electronics & Appliances',
    icon: '💻',
    subcategories: ['TVs', 'Mobiles', 'Laptops', 'Desktops'],
  },
];

const Sell = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleSubcategoryClick = (subcategory) => {
    if (subcategory === 'Cars') {
      navigate('/post/cars');
    } else if (subcategory === 'Mobiles') {
      navigate('/post/mobiles');
    }
    // Add more conditions for other subcategories if needed
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center space-x-2 p-4 border-b bg-gray-50">
          <ArrowLeft
            className="w-5 h-5 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h2 className="text-xl font-semibold">POST YOUR AD</h2>
        </div>

        {/* Gray Rectangle */}
        <div className="bg-gray-200 p-3 text-center font-semibold text-gray-600">
          CHOOSE A CATEGORY
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 divide-x">
          {/* Category List */}
          <div className="p-4 bg-gray-50">
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer 
                    ${selectedCategory?.name === category.name ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{category.icon}</span>
                    <span className="text-base">{category.name}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </li>
              ))}
            </ul>
          </div>

          {/* Selected Category */}
          <div className="col-span-2 p-4">
            {selectedCategory ? (
              <div>
                <h3 className="text-lg font-semibold mb-4">{selectedCategory.name}</h3>
                <ul className="space-y-2">
                  {selectedCategory.subcategories.map((sub, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleSubcategoryClick(sub)}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-gray-500">Select a category to see details</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;