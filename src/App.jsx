import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './components/Landing-page'
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<LandingPage/>
    },
  ])

  return (
    <>
         <RouterProvider router={router}/> 
    </>
  )
}

export default App
