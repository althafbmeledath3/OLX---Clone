
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/context';
import { useSearch } from '../context/searchContext/search';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Favorites = () => {
  const [ads, setAds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [likedAds, setLikedAds] = useState({});
  const itemsPerPage = 10;
  const { email } = useAuth();
  const { searchQuery } = useSearch();
  const server_url = 'http://localhost:4000';
  const navigate = useNavigate();

  async function loadData() {
    try {
      const response = await axios.get(`${server_url}/api/load`, {
        params: { email },
      });

      let filtered_data = response.data.ads.filter(ad => ad.email !== email && ad.like.includes(email));

      if (searchQuery) {
        filtered_data = filtered_data.filter(ad =>
          ad.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      const initialLikedAds = {};
      filtered_data.forEach(ad => {
        initialLikedAds[ad._id] = ad.like.includes(email);
      });
      setLikedAds(initialLikedAds);
      setAds(filtered_data);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load ads');
    }
  }

  useEffect(() => {
    loadData();
    setCurrentPage(1);
  }, [email, searchQuery]);

  const handleProductClick = (productId) => {
    localStorage.setItem('preview_id', productId);
    navigate('/preview');
  };

  const handleLikeClick = async (adId, e) => {
    e.stopPropagation();
   
  
    if (!email) {
      toast.error('Please log in to like a post');
      console.log('No email, exiting handleLikeClick');
      return;
    }
  
    try {
      console.log('Sending like request to:', `${server_url}/api/like/${adId}`); 
      const response = await axios.get(`${server_url}/api/like/${adId}`, {
        params: { email },
      });
  
      const isLiked = response.data.post.like.includes(email);
  
      
      setLikedAds(prev => ({
        ...prev,
        [adId]: isLiked,
      }));
  
     
      if (!isLiked) {
        setAds(prevAds => prevAds.filter(ad => ad._id !== adId));
      }
  
      // toast.success(response.data.message);
    } catch (error) {
      console.error('Error toggling like:', error.response || error.message);
      toast.error('Failed to toggle like');
    }
  };

  // Pagination
  const totalPages = Math.ceil(ads.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ads.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <h2 className="text-2xl font-semibold mb-4">My WishList</h2>
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
                {/* <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">
                  FEATURED
                </span> */}
                <button
                  className="absolute top-2 right-2 bg-white rounded-full p-1 hover:cursor-pointer z-10"
                  onClick={(e) => handleLikeClick(ad._id, e)}
                  type="button" 
                >
                  <svg
                    className="w-5 h-5"
                    fill={likedAds[ad._id] ? 'red' : 'none'}
                    stroke={likedAds[ad._id] ? 'red' : 'currentColor'}
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
                {/* <p className="text-sm text-gray-600">{ad.year}</p>
                <p className="text-xs text-gray-500">
                  {ad.location.city}, {ad.location.state}
                </p>` */}
              </div>
            </div>
          ))}
        </div>
        {ads.length > itemsPerPage && (
          <div className="flex flex-col items-center mt-6 space-y-4">
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-3 py-1 text-sm font-medium rounded-md ${
                    currentPage === pageNumber
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 text-sm font-medium rounded-md flex items-center ${
                  currentPage === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 text-sm font-medium rounded-md flex items-center ${
                  currentPage === totalPages
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                Next
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;




