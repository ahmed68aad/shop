import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ShopProvider from './components/pages/ShopContext.jsx'


// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'bootstrap/dist/js/bootstrap.js'
import '@popperjs/core/dist/umd/popper.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopProvider>
   <BrowserRouter>
   <App />
   </BrowserRouter>
   </ShopProvider>
  </React.StrictMode>,
)
