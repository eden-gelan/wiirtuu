import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import LandingPage from './pages/landingPage.tsx'
import Categories from './components/c.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
)
