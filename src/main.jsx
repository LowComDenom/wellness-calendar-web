import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { UserDataProvider } from './context/UserData.jsx'
import { AccountProvider } from './context/Account.jsx'

import App from './App.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AccountProvider>
        <UserDataProvider>
            <App />
        </UserDataProvider>
      </AccountProvider>
    </BrowserRouter>
  </StrictMode>
)