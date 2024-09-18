import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import router from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider> 

           <RouterProvider router = {router}></RouterProvider>
           
     </AuthProvider>
  </StrictMode>,
)
