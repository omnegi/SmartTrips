import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import { Toaster } from './components/ui/sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tripId]'
import MyTrips from './my-trips'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/createtrip',
    element:<CreateTrip/>
  },
  {
    path:'/viewtrip/:tripId',
    element:<Viewtrip/>
  },
  {
    path:'/mytrips',
    element:<MyTrips/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header />
    <Toaster/>
  <RouterProvider router={router}/> 
  </GoogleOAuthProvider>
  </StrictMode>,
)
