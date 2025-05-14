
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/context';// Adjusted path based on your previous context
// import { useSearch } from '../context/searchContext/search'; // Adjusted path
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const [ads, setAds] = useState([]);
//   const { email } = useAuth();
//   const { searchQuery } = useSearch();
//   const server_url = 'http://localhost:4000';
//   const navigate = useNavigate();

//   async function loadData() {
//     try {
//       const response = await axios.get(`${server_url}/api/load`);
//       let filtered_data = response.data.ads.filter(ad => ad.email !== email);
      
//       // Apply search filter if searchQuery is not empty
//       if (searchQuery) {
//         filtered_data = filtered_data.filter(ad =>
//           ad.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//       }
      
//       setAds(filtered_data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   useEffect(() => {
//     loadData();
//   }, [email, searchQuery]);

//   const handleProductClick = (productId) => {
//     localStorage.setItem('preview_id', productId); 
//     navigate('/preview'); 
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 font-sans">
//       <div className="max-w-7xl mx-auto py-6 px-4">
//         <h2 className="text-2xl font-semibold mb-4">Fresh recommendations</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {ads.map((ad) => (
//             <div
//               key={ad._id}
//               className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//               onClick={() => handleProductClick(ad._id)} 
//             >
//               <div className="relative">
//                 <div
//                   className="h-40 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${server_url}/${ad.postImage[0]})`,
//                   }}
//                 ></div>
//                 <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">FEATURED</span>
//                 <button className="absolute top-2 right-2 bg-white rounded-full p-1">
//                   <svg
//                     className="w-5 h-5 text-gray-700"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>
//               <div className="p-4">
//                 <p className="text-lg font-semibold">₹ {ad.price.toLocaleString()}</p>
//                 <p className="text-sm text-gray-600">{ad.name}</p>
//                 <p className="text-sm text-gray-600">{ad.year}</p>
//                 <p className="text-xs text-gray-500">
//                   {ad.location.city}, {ad.location.state}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useAuth } from '../context/context';
// import { useSearch } from '../context/searchContext/search';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const [ads, setAds] = useState([]);
//   const [displayCount, setDisplayCount] = useState(10); 
//   const { email } = useAuth();
//   const { searchQuery } = useSearch();
//   const server_url = 'http://localhost:4000';
//   const navigate = useNavigate();

//   async function loadData() {
//     try {
//       const response = await axios.get(`${server_url}/api/load`);
//       let filtered_data = response.data.ads.filter(ad => ad.email !== email);
      
//       // Apply search filter if searchQuery is not empty
//       if (searchQuery) {
//         filtered_data = filtered_data.filter(ad =>
//           ad.name.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//       }
      
//       setAds(filtered_data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   useEffect(() => {
//     loadData();
//   }, [email, searchQuery]);

//   const handleProductClick = (productId) => {
//     localStorage.setItem('preview_id', productId);
//     navigate('/preview');
//   };

//   const handleLoadMore = () => {
//     setDisplayCount(ads.length); 
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 font-sans">
//       <div className="max-w-7xl mx-auto py-6 px-4">
//         <h2 className="text-2xl font-semibold mb-4">Fresh recommendations</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {ads.slice(0, displayCount).map((ad) => (
//             <div
//               key={ad._id}
//               className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//               onClick={() => handleProductClick(ad._id)}
//             >
//               <div className="relative">
//                 <div
//                   className="h-40 bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${server_url}/${ad.postImage[0]})`,
//                   }}
//                 ></div>
//                 <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">FEATURED</span>
//                 <button className="absolute top-2 right-2 bg-white rounded-full p-1">
//                   <svg
//                     className="w-5 h-5 text-gray-700"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>
//               <div className="p-4">
//                 <p className="text-lg font-semibold">₹ {ad.price.toLocaleString()}</p>
//                 <p className="text-sm text-gray-600">{ad.name}</p>
//                 <p className="text-sm text-gray-600">{ad.year}</p>
//                 <p className="text-xs text-gray-500">
//                   {ad.location.city}, {ad.location.state}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//         {displayCount < ads.length && (
//           <div className="flex justify-center mt-6">
//             <button
//               onClick={handleLoadMore}
//               className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//             >
//               Load More
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/context';
import { useSearch } from '../context/searchContext/search';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [ads, setAds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { email } = useAuth();
  const { searchQuery } = useSearch();
  const server_url = 'http://localhost:4000';
  const navigate = useNavigate();

  async function loadData() {
    try {
      const response = await axios.get(`${server_url}/api/load`);
      let filtered_data = response.data.ads.filter(ad => ad.email !== email);
      
      if (searchQuery) {
        filtered_data = filtered_data.filter(ad =>
          ad.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      
      setAds(filtered_data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    loadData();
    setCurrentPage(1); // Reset to first page when data or search changes
  }, [email, searchQuery]);

  const handleProductClick = (productId) => {
    localStorage.setItem('preview_id', productId);
    navigate('/preview');
  };

  // Calculate pagination
  const totalPages = Math.ceil(ads.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ads.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to top when changing pages
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <h2 className="text-2xl font-semibold mb-4">Fresh recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {currentItems.map((ad) => (
            <div
              key={ad._id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleProductClick(ad._id)}
            >
              <div className="relative">
                <div
                  className="h-40 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${server_url}/${ad.postImage[0]})`,
                  }}
                ></div>
                <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 p-1 rounded">FEATURED</span>
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
        {ads.length > itemsPerPage && (
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => handlePageChange(1)}
              className={`py-2 px-4 rounded-md ${
                currentPage === 1
                  ? 'bg-blue-800 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              1
            </button>
            <button
              onClick={() => handlePageChange(2)}
              className={`py-2 px-4 rounded-md ${
                currentPage === 2
                  ? 'bg-blue-800 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              2
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;