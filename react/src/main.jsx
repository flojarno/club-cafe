import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import EventContextProvider from './EventContext'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <EventContextProvider>
      <App />
    </EventContextProvider>
  </BrowserRouter>

)
