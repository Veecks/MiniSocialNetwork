import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ServicesProvider from './contexts/ServicesProvider'
import UserProvider from './contexts/UserProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
    <ServicesProvider>
      <App/>
    </ServicesProvider>
    </UserProvider>
  </React.StrictMode>,
)
