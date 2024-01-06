import './App.css'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './routes/home'
import Projects from './routes/projects'
import AboutUs from './routes/aboutUs'
import Contact from './routes/contact'

function App() {
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

  return <RouterProvider router={router}/>
}

export default App
