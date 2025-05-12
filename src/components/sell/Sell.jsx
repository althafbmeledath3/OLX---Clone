// import React from "react";

// const Sell = () => {
//     const [selectedCategory, setSelectedCategory] = React.useState(null);

//     const categories = [
//         { name: "Cars", icon: <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-UJ1uk" d="M744.747 124.16l38.4 33.28 36.949 258.731 107.221 107.179 11.349 27.435v193.963l-38.827 38.784h-38.741v116.352h-77.568v-116.352h-543.061v116.352h-77.568v-116.352h-38.741l-38.827-38.827v-193.877l11.349-27.435 107.264-107.221 36.949-258.731 38.4-33.28h465.493zM768.555 474.325h-513.109l-92.544 92.501v139.093h698.197v-139.093l-92.544-92.501zM298.667 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM725.333 550.784c32.128 0 58.197 26.027 58.197 58.197 0 32.128-26.027 58.155-58.197 58.155-32.128 0-58.197-26.027-58.197-58.155s26.027-58.197 58.197-58.197zM711.083 201.685h-398.165l-27.904 195.115h453.888l-27.861-195.072z"></path></svg>, subcategories: [] },
//         { name: "Bikes", icon: "🏍️", subcategories: [] },
//         {
//             name: "Electronics & Appliances",
//             icon: <svg width="30px" height="30px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-UJ1uk" d="M149.76 128l-64.427 62.848v480.853l69.333 67.84h317.781l0.725 75.477h-169.6v80.981h416.128v-80.981h-161.621l-0.683-75.435h315.648l65.621-68.693v-482.389l-75.733-60.501h-713.173zM170.24 638.72v-414.848l15.232-14.848h646.656l21.632 17.28v413.184l-18.176 19.072h-645.12l-20.224-19.84z"></path></svg>,
//             subcategories: [
//                 "Fridge",
//                 "Computer Accessories",
//                 "Hard Disks, Printers & Monitors",
//                 "ACs",
//                 "Washing Machines",
//             ],
//         },
//     ];

//     const handleCategoryClick = (category) => {
//         setSelectedCategory(selectedCategory === category ? null : category);
//     };

//     const handleBackClick = () => {
//         setSelectedCategory(null);
//     };

//     return (
//         <div className="flex justify-center p-4 bg-gray-100">
//             <div className="w-[90%] max-w-lg relative">
//                 <button
//                     onClick={handleBackClick}
//                     className="text-2xl focus:outline-none absolute -left-[320px] top-2"
//                 >
//                     ←
//                 </button>
//                 <div className="flex items-center mb-4">
//                     <h1 className="text-lg font-bold uppercase">Post Your Ad</h1>
//                 </div>
//                 <div className="bg-white rounded-lg shadow-md p-4">
//                     <h2 className="text-base font-bold uppercase p-2">Choose a Category</h2>
//                     <div className="flex">
//                         {/* Left column: Main categories */}
//                         <div className="w-1/2 border-r">
//                             {categories.map((category, index) => (
//                                 <div key={index}>
//                                     <div
//                                         className={`flex items-center p-2 cursor-pointer hover:bg-gray-100 ${
//                                             selectedCategory === category.name ? "bg-gray-200" : ""
//                                         }`}
//                                         onClick={() => handleCategoryClick(category.name)}
//                                     >
//                                         <span className="text-lg mr-2">{category.icon}</span>
//                                         <span className="flex-1 text-sm">{category.name}</span>
//                                         <span className="text-sm">
//                                             {selectedCategory === category.name ? "▼" : "▶"}
//                                         </span>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         {/* Right column: Subcategories or Category Option */}
//                         <div className="w-1/2">
//                             {selectedCategory && (
//                                 <div>
//                                     <div
//                                         className={`w-[90%] p-2 text-sm cursor-pointer hover:bg-gray-200`}
//                                     >
//                                         {selectedCategory}
//                                     </div>
//                                     {selectedCategory === "Electronics & Appliances" && (
//                                         categories
//                                             .find((cat) => cat.name === selectedCategory)
//                                             .subcategories.map((sub, subIndex) => (
//                                                 <div
//                                                     key={subIndex}
//                                                     className="w-[90%] p-2 text-sm cursor-pointer hover:bg-gray-200"
//                                                 >
//                                                     {sub}
//                                                 </div>
//                                             ))
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Sell;

import React, { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const categories = [
  { name: 'Cars', icon: '🚗', subcategories: ['SUVs', 'Sedans', 'Hatchbacks', 'Convertibles'] },
  { name: 'Bikes', icon: '🚲', subcategories: ['Mountain Bikes', 'Road Bikes', 'Electric Bikes'] },
  { name: 'Electronics & Appliances', icon: '💻', subcategories: ['TVs', 'Refrigerators', 'Washing Machines'] },
];

const Sell = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center space-x-2 p-4 border-b bg-gray-50">
          <ArrowLeft className="w-5 h-5 cursor-pointer" />
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
                    <li key={idx} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
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
