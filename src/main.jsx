import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <App/>  
  </BrowserRouter>
  </StrictMode>
)