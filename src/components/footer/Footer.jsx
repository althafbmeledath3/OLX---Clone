import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-5 gap-8 text-sm">
        {/* Popular Locations */}
        <div>
          <h3 className="font-bold mb-2">POPULAR LOCATIONS</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-gray-600 hover:underline">Kolkata</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Mumbai</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Chennai</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Pune</a></li>
          </ul>
        </div>

        {/* Trending Locations */}
        <div>
          <h3 className="font-bold mb-2">TRENDING LOCATIONS</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-gray-600 hover:underline">Bhubaneshwar</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Hyderabad</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Chandigarh</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Nashik</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold mb-2">ABOUT US</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-gray-600 hover:underline">Tech@OLX</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Careers</a></li>
          </ul>
        </div>

        {/* OLX */}
        <div>
          <h3 className="font-bold mb-2">OLX</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-gray-600 hover:underline">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Help</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Sitemap</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Legal & Privacy information</a></li>
            <li><a href="#" className="text-gray-600 hover:underline">Vulnerability Disclosure Program</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-bold mb-2">FOLLOW US</h3>
          <div className="flex space-x-3 mb-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2H2v6h6V2zm2 0v6h6V2h-6zm8 0v6h6V2h-6zm-8 8v6h6v-6h-6zm8 0v6h6v-6h-6zM8 18v6h6v-6h-6zm8 0v6h6v-6h-6zM0 0h24v24H0z" fill="none"/>
                <path d="M22 12h-4v-2h4v2zm-6 0h-4v-2h4v2zm-6 0H6v-2h4v2zm-6 0H0v-2h4v2zm18 6h-4v-2h4v2zm-6 0h-4v-2h4v2zm-6 0H6v-2h4v2zm-6 0H0v-2h4v2zm18-12h-4V4h4v2zm-6 0h-4V4h4v2zm-6 0H6V4h4v2zm-6 0H0V4h4v2z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15h-2v-2h2v2zm0-4h-2V7h2v6zm-4 4h-2v-2h2v2zm0-4h-2V7h2v6zm-4 4H7v-2h2v2zm0-4H7V7h2v6z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.56 8.56 0 0 1-5.29 1.83c-.34 0-.68-.02-1.02-.06A12.1 12.1 0 0 0 12 22c7.73 0 11.95-6.4 11.95-11.95 0-.18 0-.36-.01-.54.82-.59 1.53-1.33 2.09-2.17-.75.33-1.56.55-2.42.65z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4H2v16h20V4zM8 16H4v-4h4v4zm0-6H4V6h4v4zm6 6h-4v-4h4v4zm0-6h-4V6h4v4zm6 6h-4v-4h4v4zm0-6h-4V6h4v4z"/>
              </svg>
            </a>
          </div>
          <a href="#" className="block mb-2">
            <img src="https://via.placeholder.com/120x40?text=Google+Play" alt="Google Play" className="h-10" />
          </a>
          <a href="#">
            <img src="https://via.placeholder.com/120x40?text=App+Store" alt="App Store" className="h-10" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-white text-sm">
          <div className="flex space-x-8">
            <span>CAR TRADE TECH GROUP</span>
            <span className="flex items-center">
              <span className="text-2xl font-bold mr-1">olx</span> INDIA
            </span>
            <span className="flex items-center">
              <span className="mr-1">carwale</span>
            </span>
            <span className="flex items-center">
              <span className="mr-1">bikewale</span>
            </span>
            <span>CAR TRADE MOBILITY OUTLOOK</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>ALL RIGHTS RESERVED © 2006-2025 OLX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;