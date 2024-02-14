import { useState } from 'react'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './routes/home'
import Projects from './routes/projects'
import AboutUs from './routes/aboutUs'
import Contact from './routes/contact'

import CookieConsent, {KEY_COOKIE_CONSENT} from './components/cookieConsent'

const App = () => { 
  const router = createHashRouter(
    [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
      {
        path: '/about-us',
        element: <AboutUs/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  )

  return <>
    <RouterProvider router={router}/>
    <CookieConsent/>
  </>
}

export default App
