// import React, { useState } from 'react';
// import axios from 'axios';

// const Preview = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const preview_id = localStorage.getItem("preview_id")

//   async function load_preview(){

//     const data = await axios.get(`http://localhost:4000/api/preview/${preview_id}`)
  
//     console.log(data.data)


//   }


//   load_preview()

//   const images = [
//     'https://cdn.cars24.com/prod/auto-news24-cms/Newsroom/2025/03/26/ad393119-3bb7-4799-8626-fa8dfc0f2cf4-2025-land-rover-defender-octa-price-in-india-land-rover.webp',
//     'https://hips.hearstapps.com/hmg-prod/images/2025-land-rover-defender-octa-green-front-three-quarters-66841d6fe69b4.jpg',
//     'https://content.carlelo.com/uploads/model/1650118066.webp',
//   ];

//   const handlePrev = () => {
//     setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
//       {/* Image Slider Section */}
//       <div className="flex items-center justify-center mb-6">
//         <div className="relative flex items-center w-[90%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-black">
//           {/* Left Arrow */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-0 z-10 p-2 text-white text-lg sm:text-2xl hover:bg-gray-800 rounded-full"
//           >
//             ←
//           </button>

//           {/* Image Container */}
//           <div className="flex justify-center items-center w-full h-full">
//             <img
//               src={images[currentImage]}
//               alt="Car Preview"
//               className="h-full w-full object-contain"
//             />
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={handleNext}
//             className="absolute right-0 z-10 p-2 text-white text-lg sm:text-2xl hover:bg-gray-800 rounded-full"
//           >
//             →
//           </button>

//           {/* Top Right Icons */}
//           <div className="absolute top-2 right-2 flex space-x-2">
//             <button className="text-white text-lg sm:text-xl hover:text-gray-300">
//               <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C9.375 12.667 10.257 12.25 11.25 12.25H12.75C13.743 12.25 14.625 12.667 15.316 13.342M8.684 13.342C7.667 14.333 7 15.708 7 17.25C7 19.873 9.127 22 11.75 22C14.373 22 16.5 19.873 16.5 17.25C16.5 15.708 15.833 14.333 14.816 13.342M8.684 13.342L5.25 9.75M14.816 13.342L18.25 9.75M5.25 9.75C5.25 11.959 3.459 13.75 1.25 13.75C3.459 13.75 5.25 15.541 5.25 17.75C5.25 15.541 7.041 13.75 9.25 13.75C7.041 13.75 5.25 11.959 5.25 9.75ZM18.25 9.75C18.25 11.959 20.041 13.75 22.25 13.75C20.041 13.75 18.25 15.541 18.25 17.75C18.25 15.541 16.459 13.75 14.25 13.75C16.459 13.75 18.25 11.959 18.25 9.75Z"></path>
//               </svg>
//             </button>
//             <button className="text-white text-lg sm:text-xl hover:text-gray-300">
//               <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//               </svg>
//             </button>
//           </div>

//           {/* Watermark */}
//           <div className="absolute bottom-2 right-2 text-white text-base sm:text-lg font-bold opacity-50">
//             olx
//           </div>
//         </div>
//       </div>

//       {/* Listing Details Section */}
//       <div className="w-[90%] mx-auto flex flex-col md:flex-row">
//         {/* Left Column: Car Details */}
//         <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4 md:mb-0">
//           {/* Verified Seller Tag */}
//           <div className="flex items-center mb-2">
//             <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
//             </svg>
//             <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
//               VERIFIED SELLER
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-xl sm:text-2xl font-bold mb-2">
//             Mercedes-Benz New C-Class (2022)
//           </h1>
//           <p className="text-base sm:text-lg text-gray-600 mb-4">
//             Progressive C 220d
//           </p>

//           {/* Car Specs */}
//           <div className="flex flex-wrap gap-4 mb-4">
//             <div className="flex items-center">
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//               </svg>
//               <span>DIESEL</span>
//             </div>
//             <div className="flex items-center">
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
//               </svg>
//               <span>19,000 KM</span>
//             </div>
//             <div className="flex items-center">
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span>AUTOMATIC</span>
//             </div>
//           </div>

//           {/* Overview Section */}
//           <h2 className="text-lg sm:text-xl font-semibold mb-2">Overview</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//             <div className="flex items-center">
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
//               </svg>
//               <span>Owner: 1st</span>
//             </div>
//             <div className="flex items-center">
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//               </svg>
//               <span>Location: Ernakulam HPO, Kochi</span>
//             </div>
//             <div className="flex items-center">
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//               </svg>
//               <span>Posting date: 09-MAY-25</span>
//             </div>
//           </div>

//           {/* Description Section */}
//           <h2 className="text-lg sm:text-xl font-semibold mb-2">Description</h2>
//           <p className="text-sm sm:text-base text-gray-600">
//             2022 MERCEDES BENZ C220 D PROGRESSIVE<br />
//             SINGLE OWNER | 19000 KMS<br />
//             KL REG | FANCY NO<br />
//             WARRANTY TILL 2025<br />
//             EXCELLENT CONDITION<br />
//             LOAN AVAILABLE UPTO 55 LAKHS<br />
//             [ EXCHANGE AVAILABLE ]
//           </p>
//         </div>

//         {/* Right Column: Seller Info and Map */}
//         <div className="w-full md:w-80 md:ml-6">
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4">
//             <h2 className="text-xl sm:text-2xl font-bold mb-2">₹ 55,00,000</h2>
//             <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mb-2">
//               Make offer
//             </button>
//             <div className="flex items-center mb-2">
//               <img
//                 src="https://tmssl.akamaized.net/images/foto/galerie/ronaldo-cristiano-2017-real-madrid-ballon-d-or-2016-0026751808hjpg-1698686328-120749.jpg"
//                 alt="Seller Profile"
//                 className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2"
//               />
//               <div>
//                 <p className="font-semibold text-sm sm:text-base">Posted By Aju 777</p>
//                 <p className="text-xs sm:text-sm text-gray-500">Member since MAY 2016</p>
//               </div>
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
//                 <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd"></path>
//               </svg>
//             </div>
//             <p className="text-xs sm:text-sm text-gray-500 mb-2">1232 Items listed</p>
//             <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50">
//               Chat with seller
//             </button>
//             <div className="flex items-center mt-2">
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//               </svg>
//               <span className="text-sm sm:text-base">8547041727</span>
//             </div>
//           </div>

//           {/* Map Section */}
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="h-40 bg-gray-200 flex items-center justify-center mb-2 overflow-hidden rounded-lg">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.231693003627!2d76.27770071476465!3d9.981069993747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sErnakulam%20HPO%2C%20Kochi%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sin!4v1746788926035!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//             <p className="text-xs sm:text-sm text-gray-600">
//               9°58'33.6"N 76°16'....<br />
//               Bolgatty Palace and Island Resort<br />
//               Holiday Inn IHG H<br />
//               Kaloor
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Preview;



// src/components/Preview.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Preview = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const server_url = 'http://localhost:4000';

  useEffect(() => {
    const loadPreview = async () => {
      const preview_id = localStorage.getItem('preview_id');
      if (!preview_id) {
        setError('No product ID found');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${server_url}/api/preview/${preview_id}`);
        console.log(response.data)
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load product');
        setLoading(false);
        console.error('Error fetching product:', err);
      }
    };

    loadPreview();
  }, []);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? product.postImage.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === product.postImage.length - 1 ? 0 : prev + 1));
  };

  if (loading) return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen bg-gray-100 flex items-center justify-center">{error}</div>;
  if (!product) return <div className="min-h-screen bg-gray-100 flex items-center justify-center">No product found</div>;


  const sellerUsername = product.email.split('@')[0];


  const formattedDescription = product.description
    ? product.description.split(',').map((line, index) => (
        <span key={index}>
          {line.trim()}
          <br />
        </span>
      ))
    : 'No descption';

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      <div className="flex items-center justify-center mb-6">
        <div className="relative flex items-center w-[90%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-black">

          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 text-white text-lg sm:text-2xl hover:bg-gray-800 rounded-full"
          >
            ←
          </button>

          <div className="flex justify-center items-center w-full h-full">
            <img
              src={`${server_url}/${product.postImage[currentImage]}`}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          </div>


          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 text-white text-lg sm:text-2xl hover:bg-gray-800 rounded-full"
          >
            →
          </button>


          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="text-white text-lg sm:text-xl hover:text-gray-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C9.375 12.667 10.257 12.25 11.25 12.25H12.75C13.743 12.25 14.625 12.667 15.316 13.342M8.684 13.342C7.667 14.333 7 15.708 7 17.25C7 19.873 9.127 22 11.75 22C14.373 22 16.5 19.873 16.5 17.25C16.5 15.708 15.833 14.333 14.816 13.342M8.684 13.342L5.25 9.75M14.816 13.342L18.25 9.75M5.25 9.75C5.25 11.959 3.459 13.75 1.25 13.75C3.459 13.75 5.25 15.541 5.25 17.75C5.25 15.541 7.041 13.75 9.25 13.75C7.041 13.75 5.25 11.959 5.25 9.75ZM18.25 9.75C18.25 11.959 20.041 13.75 22.25 13.75C20.041 13.75 18.25 15.541 18.25 17.75C18.25 15.541 16.459 13.75 14.25 13.75C16.459 13.75 18.25 11.959 18.25 9.75Z"></path>
              </svg>
            </button>
            <button className="text-white text-lg sm:text-xl hover:text-gray-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>


          <div className="absolute bottom-2 right-2 text-white text-base sm:text-lg font-bold opacity-50">
            olx
          </div>
        </div>
      </div>


      <div className="w-[90%] mx-auto flex flex-col md:flex-row">

        <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg [shadow-md mb-4 md:mb-0">

          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              VERIFIED SELLER
            </span>
          </div>


          <h1 className="text-xl sm:text-2xl font-bold mb-2">
            {product.name} ({product.year})
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            {product.category}
          </p>

 
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>{product.fuel || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span>{product.km_driven ? `${product.km_driven} KM` : 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{product.transmission || 'N/A'}</span>
            </div>
          </div>

          {/* Overview Section */}
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>Owner: {product.owners || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              </svg>
              <span>Location: {product.location.city}, {product.location.state}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>Posting date: {product.postingDate || 'N/A'}</span>
            </div>
          </div>

          {/* Description Section */}
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Description</h2>
          <p className="text-sm sm:text-base text-gray-600">
            {formattedDescription}
          </p>
        </div>

        {/* Right Column: Seller Info and Map */}
        <div className="w-full md:w-80 md:ml-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4">
           48            <h2 className="text-xl sm:text-2xl font-bold mb-2">₹ {product.price.toLocaleString()}</h2>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mb-2">
              Make offer
            </button>
            <div className="flex items-center mb-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E6vNp11MpwyOi-B-2dxEnVdsUAMBQN3HNw&s" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2"
              />
              <div>
                <p className="font-semibold text-sm sm:text-base">Posted By {sellerUsername}</p>
                <p className="text-xs sm:text-sm text-gray-500">Member since MAY 2016</p>
              </div>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd"></path>
              </svg>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mb-2">1232 Items listed</p>
            {/* <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50">
              Chat with seller
            </button> */}
            <div className="flex items-center mt-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="text-sm sm:text-base">{product.email || 'N/A'}</span>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-40 bg-gray-200 flex items-center justify-center mb-2 overflow-hidden rounded-lg">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.231693003627!2d76.27770071476465!3d9.981069993747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2s${encodeURIComponent(`${product.location.city}, ${product.location.state}`)}!5e0!3m2!1sen!2sin!4v1746788926035!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {product.location.city}, {product.location.state}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
