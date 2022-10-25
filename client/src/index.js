import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import Provider from './Provider'
import ApolloProvider from './ApolloProvider'
import { AuthProvider } from './context/auth'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ApolloProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
