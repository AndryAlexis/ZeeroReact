import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './routes/home'
import Projects from './routes/projects'
import AboutUs from './routes/aboutUs'
import Contact from './routes/contact'

import CookieConsent from './components/cookieConsent'

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
//Descomenta "base" de vite.config.js

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './routes/home';
// import CookieConsent from './components/cookieConsent';

// const App = () => {
//   return <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           {/* <Route path="*" element={<div>Error 404 - Page not found</div>}/> */}
//         </Routes>
//       </Router>
//       <CookieConsent />
//   </>
// }

// export default App;
