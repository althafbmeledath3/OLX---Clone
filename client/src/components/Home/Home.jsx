// import React, { useEffect } from 'react';
// import axios from 'axios';


// const Home = () => {



//   async function loadData(){


//     const response = await axios.get("http://localhost:4000/api/load")


//     console.log(response.data.ads[0])
//   }



//   useEffect(()=>{

//     loadData()
//   })

  
//   return (
//     <div className="min-h-screen bg-gray-100 font-sans">
//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto py-6 px-4">
//         <h2 className="text-2xl font-semibold mb-4">Fresh recomdstion</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {/* Item 1 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="relative">
//               <div 
//                 className="h-40 bg-cover bg-center" 
//                 style={{ backgroundImage: "url('https://www.livemint.com/lm-img/img/2024/07/03/600x338/octa_defender_1720004492208_1720004497006.png')" }}
//               ></div>
//               <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">FEATURED</span>
//               <button className="absolute top-2 right-2 bg-white rounded-full p-1">
//                 <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="p-4">
//               <p className="text-lg font-semibold">₹ 3,92,000</p>
//               <p className="text-sm text-gray-600">Defender</p>
//               <p className="text-sm text-gray-600">GO 600 the stille</p>
//               <p className="text-xs text-gray-500">TONG - TWO DAYS AGO</p>
//             </div>
//           </div>

//           {/* Item 2 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="relative">
//               <div 
//                 className="h-40 bg-cover bg-center" 
//                 style={{ backgroundImage: "url('https://img.etimg.com/thumb/width-640,height-480,imgsize-69266,resizemode-75,msid-106775052/industry/auto/cars-uvs/super-sports-car-segment-in-india-to-register-30-pc-growth-this-year-mclaren-automotive/mclaren-750s-launched-in-india-at-rs-5-91-crore-what-makes-it-so-expensive.jpg')" }}
//               ></div>
//               <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">FEATURED</span>
//               <button className="absolute top-2 right-2 bg-white rounded-full p-1">
//                 <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="p-4">
//               <p className="text-lg font-semibold">₹ 7,55,005</p>
//               <p className="text-sm text-gray-600">Imported look with heavy duty comple...</p>
//               <p className="text-xs text-gray-500">CHAKARGAON - ONE WEEK AGO</p>
//             </div>
//           </div>

//           {/* Item 3 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="relative">
//               <div 
//                 className="h-40 bg-cover bg-center" 
//                 style={{ backgroundImage: "url('https://img.etimg.com/thumb/width-640,height-480,imgsize-69266,resizemode-75,msid-106775052/industry/auto/cars-uvs/super-sports-car-segment-in-india-to-register-30-pc-growth-this-year-mclaren-automotive/mclaren-750s-launched-in-india-at-rs-5-91-crore-what-makes-it-so-expensive.jpg')" }}
//               ></div>
//               <button className="absolute top-2 right-2 bg-white rounded-full p-1">
//                 <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="p-4">
//               <p className="text-lg font-semibold">₹ 1,22,539</p>
//               <p className="text-sm text-gray-600">Th pro 1D2gb storage for Sale 90% batt...</p>
//               <p className="text-xs text-gray-500">ABERDEEN BAZAR - THREE DAYS AGO</p>
//             </div>
//           </div>

//           {/* Item 4 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="relative">
//               <div 
//                 className="h-40 bg-cover bg-center" 
//                 style={{ backgroundImage: "url('https://www.livemint.com/lm-img/img/2024/07/03/600x338/octa_defender_1720004492208_1720004497006.png')" }}
//               ></div>
//               <button className="absolute top-2 right-2 bg-white rounded-full p-1">
//                 <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="p-4">
//               <p className="text-lg font-semibold">₹ 2,1805</p>
//               <p className="text-sm text-gray-600">Roodmi note 1Td 6gb ram</p>
//               <p className="text-xs text-gray-500">PATHERGUDA - TODAY</p>
//             </div>
//           </div>

//           {/* Item 5 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="relative">
//               <div 
//                 className="h-40 bg-cover bg-center" 
//                 style={{ backgroundImage: "url('https://www.livemint.com/lm-img/img/2024/07/03/600x338/octa_defender_1720004492208_1720004497006.png')" }}
//               ></div>
//               <button className="absolute top-2 right-2 bg-white rounded-full p-1">
//                 <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="p-4">
//               <p className="text-lg font-semibold">₹ 9,005</p>
//               <p className="text-sm text-gray-600">Bicycle for sale</p>
//               <p className="text-xs text-gray-500">HADDO - TODAY</p>
//             </div>
//           </div>

//           {/* Item 6 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="relative">
//               <div 
//                 className="h-40 bg-cover bg-center" 
//                 style={{ backgroundImage: "url('https://www.livemint.com/lm-img/img/2024/07/03/600x338/octa_defender_1720004492208_1720004497006.png')" }}
//               ></div>
//               <button className="absolute top-2 right-2 bg-white rounded-full p-1">
//                 <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="p-4">
//               <p className="text-lg font-semibold">₹ 15,005</p>
//               <p className="text-sm text-gray-600">Scooter in good condition</p>
//               <p className="text-xs text-gray-500">CHAKARGAON - TODAY</p>
//             </div>
//           </div>

//           {/* Item 7 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="relative">
//               <div 
//                 className="h-40 bg-cover bg-center" 
//                 style={{ backgroundImage: "url('https://www.livemint.com/lm-img/img/2024/07/03/600x338/octa_defender_1720004492208_1720004497006.png')" }}
//               ></div>
//               <button className="absolute top-2 right-2 bg-white rounded-full p-1">
//                 <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="p-4">
//               <p className="text-lg font-semibold">₹ 5,00,005</p>
//               <p className="text-sm text-gray-600">2 BHK house for sale</p>
//               <p className="text-xs text-gray-500">ABERDEEN BAZAR - TODAY</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;





import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  // State to store the fetched ads
  const [ads, setAds] = useState([]);

  // Function to fetch data
  async function loadData() {
    try {
      const response = await axios.get('http://localhost:4000/api/load');
      setAds(response.data.ads); // Store the ads in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Fetch data on component mount
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-4">
        <h2 className="text-2xl font-semibold mb-4">Fresh recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {ads.map((ad) => (
            <div key={ad._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <div
                  className="h-40 bg-cover bg-center"
                  style={{
                    backgroundImage: url(`http:localhost:4000/api/${ad.postImage[0]}`),
                  }}
                ></div>
                <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">FEATURED</span>
                <button className="absolute top-2 right-2 bg-white rounded-full p-1">
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold">₹ {ad.price.toLocaleString()}</p>
                <p className="text-sm text-gray-600">{ad.name}</p>
                <p className="text-sm text-gray-600">{ad.year}</p>
                <p className="text-xs text-gray-500">
                  {ad.location.city}, {ad.location.state}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;