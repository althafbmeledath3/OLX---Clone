OLX Clone
A modern, responsive classifieds platform built with the MERN stack (MongoDB, Express.js, React, Node.js), replicating core functionalities of OLX. This project allows users to post, browse, and manage ads for various categories like cars, bikes, mobiles, and laptops, with features like Google authentication, favorites, and location-based filtering.

Table of Contents

Features
Tech Stack
Installation
Usage
Project Structure
Screenshots
Contributing
License

Features

User Authentication: Secure login via Google using Auth0, with user data stored in localStorage for persistent sessions.
Ad Posting: Create ads for categories like cars, bikes, mobiles, and laptops with dynamic forms tailored to each category (e.g., "Car Name" for cars).
Browse Ads: Filter ads by category, location (state, city, neighborhood), and search terms, with pagination for efficient browsing.
Favorites: Add or remove ads to a favorites list with real-time UI updates using a heart icon.
Responsive Design: Mobile-friendly interface styled with Tailwind CSS, featuring a clean navbar, dropdowns, and grid-based photo uploads (up to 20 photos).
Location-Based Filtering: Cascading dropdowns for selecting state, city, and neighborhood.
Dynamic Navigation: Navigate between category-specific posting pages (e.g., /post/cars, /post/mobiles) using React Router.
Secure Backend: RESTful API with MongoDB for data storage, input validation, and Auth0 for authentication.

Tech Stack

Frontend: React, Tailwind CSS, React Router, Auth0, Axios
Backend: Node.js, Express.js, MongoDB, Mongoose
Authentication: Auth0 for Google OAuth
Deployment: (Replace with your deployment platform, e.g., Vercel, Heroku, or AWS)
Tools: Vite (for fast React development), ESLint, Prettier

Installation
Follow these steps to set up the project locally:
Prerequisites

Node.js (v16 or higher)
MongoDB (local or Atlas)
Auth0 account for authentication

Steps

Clone the repository:
git clone https://github.com/althafbmeledath3/olx-clone.git
cd olx-clone


Install dependencies:
# Backend
cd server
npm install

# Frontend
cd ../client
npm install


Set up environment variables:

Create a .env file in the server directory:MONGODB_URI=your_mongodb_connection_string
AUTH0_DOMAIN=your_auth0_domain
AUTH0_CLIENT_ID=your_auth0_client_id
AUTH0_CLIENT_SECRET=your_auth0_client_secret


Create a .env file in the client directory:VITE_AUTH0_DOMAIN=your_auth0_domain
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_API_URL=http://localhost:4000/api




Run the application:
# Start the backend (from server directory)
npm run dev

# Start the frontend (from client directory)
npm run dev


Open http://localhost:5173 in your browser to view the app.



