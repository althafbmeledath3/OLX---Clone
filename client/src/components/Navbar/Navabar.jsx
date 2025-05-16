
import { useAuth } from '../context/context';
import { useSearch } from '../context/searchContext/search';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/symbol.png';
import search from '../../assets/search1.svg';
import arrow from '../../assets/arrow-down.svg';
import searchWt from '../../assets/search.svg';
import addBtn from '../../assets/addButton.png';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isLoading } = useAuth0();
  const { email, profilePicture } = useAuth();
  const { setSearchQuery } = useSearch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    setIsDropdownOpen(false);
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFavoritesClick = () => {
    console.log('Heart icon clicked, navigating to /fav');
    navigate('/fav');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative z-[1000]">
      <nav className="fixed top-0 w-full overflow-auto p-2 pl-3 pr-3 shadow-md bg-slate-100 border-b-4 border-solid border-b-white flex items-center z-[500]">
        <img
          src={logo}
          alt="OLX Logo"
          className="w-12 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <div className="relative location-search ml-5">
          <img src={search} alt="Search Icon" className="absolute top-4 left-2 w-5" />
          <input
            placeholder="Search city, area, or locality..."
            className="w-[50px] sm:w-[150px] md:w-[250px] lg:w-[270px] p-3 pl-8 pr-8 border-2 border-black rounded-md placeholder:text-ellipsis focus:outline-none focus:border-teal-300"
            type="text"
          />
          <img src={arrow} alt="Arrow Down" className="absolute top-4 right-3 w-5 cursor-pointer" />
        </div>

        <div className="ml-5 mr-2 relative w-full main-search">
          <input
            placeholder="Find Cars, Mobile Phones, and More..."
            className="w-full p-3 border-2 border-black rounded-md placeholder:text-ellipsis focus:outline-none focus:border-teal-300"
            type="text"
            onChange={handleSearch}
          />
          <div className="flex justify-center items-center absolute top-0 right-0 h-full rounded-e-md w-12 bg-[#002f34]">
            <img className="w-5 filter invert" src={searchWt} alt="Search Icon" />
          </div>
        </div>

        <div className="mx-1 sm:ml-5 sm:mr-5 relative lang flex items-center">
          <p className="font-bold mr-3">English</p>
          <img src={arrow} alt="Arrow Down" className="w-5 cursor-pointer" />
        </div>

        <div className="ml-5 flex items-center space-x-2">
          {email ? (
            <>
              <img
                src={
                  profilePicture ||
                  'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE='
                }
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer object-cover aspect-square profile-img"
                onClick={toggleDropdown}
              />
              {/* Favorite icon */}
              <button
                onClick={handleFavoritesClick}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-gray-100 hover:cursor-pointer"
                title="Favorites"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#002f34"
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
            </>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="font-bold underline cursor-pointer"
              style={{ color: '#002f34' }}
            >
              Login
            </button>
          )}
        </div>

        <img
          src={addBtn}
          onClick={() => navigate('/sell')}
          className="w-24 mx-1 sm:ml-5 sm:mr-5 shadow-xl rounded-full cursor-pointer"
          alt="Sell Button"
        />
      </nav>

      {isDropdownOpen && email && (
        <div className="fixed right-16 top-14 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-[1001]">
          <div className="p-4 border-b border-gray-200 flex items-center">
            <img
              src={
                profilePicture ||
                'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE='
              }
              alt="Profile"
              className="w-10 h-10 rounded-full mr-2 object-cover aspect-square profile-img"
            />
            <div>
              <p className="font-semibold text-gray-800">{email.split("@")[0]}</p>
              <button className="text-white bg-blue-600 rounded-lg px-3 py-1 mt-1 text-sm hover:bg-blue-700 transition">
                View and edit profile
              </button>
            </div>
          </div>
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-gray-700">
              <span className="mr-2">📋</span> My ADS
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-gray-700">
              <span className="mr-2">💳</span> Paid Packages & Billing
            </li>
            <li className="px-4 py-2 bg-blue-50 text-blue-600 font-semibold flex items-center">
              <span className="mr-2">❓</span> Help
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-gray-700">
              <span className="mr-2">⚙️</span> Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-gray-700">
              <span className="mr-2">⬇️</span> Install OLX Lite App
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-gray-700"
              onClick={handleLogout}
            >
              <span className="mr-2">🚪</span> Logout
            </li>
          </ul>
        </div>
      )}

      <div className="w-full relative z-0 flex shadow-md p-2 pt-20 pl-10 pr-10 sm:pl-44 md:pr-44 sub-lists">
        <ul className="list-none flex items-center justify-center w-full">
          <div className="flex flex-shrink-0">
            <p className="font-semibold uppercase all-cats cursor-pointer">All categories</p>
            <img className="w-4 ml-2 cursor-pointer" src={arrow} alt="Arrow Down" />
          </div>
          <li className="ml-4">Vehicles</li>
          <li className="ml-4">Electronics</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;