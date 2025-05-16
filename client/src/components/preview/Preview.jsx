





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/context';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Preview = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [showOfferInput, setShowOfferInput] = useState(false);
  const [offerPrice, setOfferPrice] = useState('');
  const [offerError, setOfferError] = useState('');
  const server_url = 'http://localhost:4000';
  const navigate = useNavigate();
  const { email } = useAuth();

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
        console.log('Product data:', response.data);
        setProduct(response.data);
        setIsLiked(Array.isArray(response.data.like) ? response.data.like.includes(email) : false);
        setLoading(false);
      } catch (err) {
        setError('Failed to load product');
        setLoading(false);
        console.error('Error fetching product:', err.response || err.message);
      }
    };

    loadPreview();
  }, [email]);

  const handlePrev = () => {
    if (product?.postImage?.length) {
      setCurrentImage((prev) => (prev === 0 ? product.postImage.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (product?.postImage?.length) {
      setCurrentImage((prev) => (prev === product.postImage.length - 1 ? 0 : prev + 1));
    }
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  const handleLikeClick = async () => {
    // Like button: filled red heart if liked, outline otherwise
    console.log('Like button clicked for productId:', product?._id, 'with email:', email);
    if (isLiking) {
      console.log('Like request in progress for productId:', product?._id);
      return;
    }

    if (!email) {
      toast.error('Please log in to like a post');
      console.log('No email, exiting handleLikeClick');
      return;
    }

    setIsLiking(true);
    try {
      console.log('Sending like request to:', `${server_url}/api/like/${product._id}`);
      const response = await axios.get(`${server_url}/api/like/${product._id}`, {
        params: { email },
      });
      console.log('Like response:', response.data);

      setIsLiked(
        Array.isArray(response.data.post?.like) ? response.data.post.like.includes(email) : false
      );
      setProduct((prev) => ({
        ...prev,
        like: response.data.post?.like || prev.like,
      }));
    } catch (error) {
      console.error('Error toggling like:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      toast.error('Failed to toggle like');
    } finally {
      setIsLiking(false);
    }
  };

  const handleMakeOffer = () => {
    setShowOfferInput(true);
  };

  const handleOfferChange = (e) => {
    const value = e.target.value;
    setOfferPrice(value);

    if (!product || !value) {
      setOfferError('');
      return;
    }

    const offer = parseFloat(value);
    const minOffer = product.price * 0.9; // 90% of original price
    const maxOffer = product.price; // Original price

    if (isNaN(offer) || offer <= 0) {
      setOfferError('Please enter a valid price');
    } else if (offer < minOffer) {
      setOfferError(`Offer must be at least 90% of the original price (₹${maxOffer.toLocaleString()})`);
    } else if (offer > maxOffer) {
      setOfferError(`Offer cannot exceed the original price (₹${maxOffer.toLocaleString()})`);
    } else {
      setOfferError('');
    }
  };

  const handleOfferSubmit = async(e) => {
    e.preventDefault();
    if (offerError || !offerPrice) {
      return;
    }

    console.log('Submitting offer:', {
      productId: product._id,
      offerPrice: parseFloat(offerPrice),
      email,
    });




    // Replace with your API call to submit the offer
    const response = await axios.get("http://localhost:4000/api/offer", {
      params: {
          sellerMail: product.email,
          buyerEmail: email,
          name:product.name,
          price:product.price,
          offerPrice:offerPrice,
          state:product.location.state,
          city:product.location.city
      }
  });
  
  

    console.log(response)

    toast.success('Offer submitted successfully!');
    setShowOfferInput(false);
    setOfferPrice('');
    setOfferError('');
  };

  if (loading) return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen bg-gray-100 flex items-center justify-center">{error}</div>;
  if (!product) return <div className="min-h-screen bg-gray-100 flex items-center justify-center">No product found</div>;

  const sellerUsername = product.email?.split('@')[0] || 'Unknown';
  const formattedDescription = product.description
    ? product.description.split(',').map((line, index) => (
        <span key={index}>
          {line.trim()}
          <br />
        </span>
      ))
    : 'No description';
  const isOfferValid = !offerError && offerPrice && parseFloat(offerPrice) > 0;
  const cleanedImagePath = product.postImage?.[currentImage]?.replace(/^\/+/, '') || '';

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <ToastContainer />
      <div className="w-[90%] mx-auto mb-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="relative flex items-center w-[90%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-black">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 text-white text-lg sm:text-2xl hover:bg-gray-800 rounded-full"
            disabled={!product?.postImage?.length}
          >
            ←
          </button>
          <div className="flex justify-center items-center w-full h-full">
            {cleanedImagePath ? (
              <img
                src={`${server_url}/${cleanedImagePath}`}
                alt={product.name || 'Product image'}
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="text-white">No image available</div>
            )}
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 text-white text-lg sm:text-2xl hover:bg-gray-800 rounded-full"
            disabled={!product?.postImage?.length}
          >
            →
          </button>
          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="text-white text-lg sm:text-xl hover:text-gray-300" aria-label="Share">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C9.375 12.667 10.257 12.25 11.25 12.25H12.75C13.743 12.25 14.625 12.667 15.316 13.342M8.684 13.342C7.667 14.333 7 15.708 7 17.25C7 19.873 9.127 22 11.75 22C14.373 22 16.5 19.873 16.5 17.25C16.5 15.708 15.833 14.333 14.816 13.342M8.684 13.342L5.25 9.75M14.816 13.342L18.25 9.75M5.25 9.75C5.25 11.959 3.459 13.75 1.25 13.75C3.459 13.75 5.25 15.541 5.25 17.75C5.25 15.541 7.041 13.75 9.25 13.75C7.041 13.75 5.25 11.959 5.25 9.75ZM18.25 9.75C18.25 11.959 20.041 13.75 22.25 13.75C20.041 13.75 18.25 15.541 18.25 17.75C18.25 15.541 16.459 13.75 14.25 13.75C16.459 13.75 18.25 11.959 18.25 9.75Z"
                />
              </svg>
            </button>
            <button
              className={`bg-white rounded-full p-1 hover:cursor-pointer hover:bg-gray-100 z-10 ${
                isLiking ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleLikeClick}
              type="button"
              disabled={isLiking}
              aria-label={isLiked ? 'Unlike post' : 'Like post'}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill={isLiked ? 'red' : 'none'}
                stroke={isLiked ? 'red' : 'currentColor'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-2 right-2 text-white text-base sm:text-lg font-bold opacity-50">
            olx
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex flex-col md:flex-row">
        <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4 md:mb-0">
          <div className="flex items-center mb-2">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              VERIFIED SELLER
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold mb-2">
            {product.name || 'N/A'} ({product.year || 'N/A'})
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-4">{product.category || 'N/A'}</p>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{product.fuel || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>{product.km_driven ? `${product.km_driven} KM` : 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{product.transmission || 'N/A'}</span>
            </div>
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Owner: {product.owners || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
              <span>
                Location: {product.location?.city || 'N/A'}, {product.location?.state || 'N/A'}
              </span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Posting date: {product.postingDate || 'N/A'}</span>
            </div>
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Description</h2>
          <p className="text-sm sm:text-base text-gray-600">{formattedDescription}</p>
        </div>

        <div className="w-full md:w-80 md:ml-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              ₹ {product.price?.toLocaleString() || 'N/A'}
            </h2>
            <button
              onClick={handleMakeOffer}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mb-2"
            >
              Make Offer
            </button>
            {showOfferInput && (
              <div className="mt-4">
                <input
                  type="number"
                  value={offerPrice}
                  onChange={handleOfferChange}
                  placeholder="Enter your offer (₹)"
                  className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-describedby="offer-error"
                />
                {offerError && (
                  <p id="offer-error" className="text-red-500 text-sm mb-2">
                    {offerError}
                  </p>
                )}
                <button
                  onClick={handleOfferSubmit}
                  disabled={!isOfferValid}
                  className={`w-full py-2 rounded-md text-white ${
                    isOfferValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit Offer
                </button>
              </div>
            )}
            <div className="flex items-center mb-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E6vNp11MpwyOi-B-2dxEnVdsUAMBQN3HNw&s"
                alt={`Avatar for ${sellerUsername}`}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2"
              />
              <div>
                <p className="font-semibold text-sm sm:text-base">Posted By {sellerUsername}</p>
                <p className="text-xs sm:text-sm text-gray-500">Member since MAY 2016</p>
              </div>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mb-2">1232 Items listed</p>
            <div className="flex items-center mt-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm sm:text-base">{product.email || 'N/A'}</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-40 bg-gray-200 flex items-center justify-center mb-2 overflow-hidden rounded-lg">
              <iframe
                src={`https://www.google.com/maps/embed?q=${encodeURIComponent(
                  `${product.location?.city || ''}, ${product.location?.state || ''}`
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Product location map"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {product.location?.city || 'N/A'}, {product.location?.state || 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;

