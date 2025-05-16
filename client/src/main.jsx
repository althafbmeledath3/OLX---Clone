
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from './components//context/context.jsx';
import { SearchProvider } from './components/context/searchContext/search.jsx';

const onRedirectCallback = (appState) => {
  window.history.replaceState({}, document.title, appState?.returnTo || "/")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-ypjgliwzvaoqf0ls.us.auth0.com"
      clientId="wPjyE5hF8M1dv2pP8yb6kKpafH1cUhTI"
      authorizationParams={{redirect_uri: window.location.origin}}
      useRefreshTokens={true}
      cacheLocation='localstorage'
      onRedirectCallback={onRedirectCallback}
    >
      <AuthProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </AuthProvider>
    </Auth0Provider>
  </StrictMode>
);



