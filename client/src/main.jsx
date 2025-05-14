// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { useAuth } from './components/context/context.jsx'
// import {Auth0Provider} from "@auth0/auth0-react"

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <Auth0Provider
//     domain="dev-ypjgliwzvaoqf0ls.us.auth0.com"
//     clientId="wPjyE5hF8M1dv2pP8yb6kKpafH1cUhTI"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>,
//   </StrictMode>,
// )



// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from './components//context/context.jsx';
import { SearchProvider } from './components/context/searchContext/search.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-ypjgliwzvaoqf0ls.us.auth0.com"
      clientId="wPjyE5hF8M1dv2pP8yb6kKpafH1cUhTI"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AuthProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </AuthProvider>
    </Auth0Provider>
  </StrictMode>
);