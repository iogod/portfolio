import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './components/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import Experience from './components/experience.jsx';
import About from './components/About.jsx';

const router = createBrowserRouter([
  {
    element: <Navbar/>,
    children: [
      {
        path: "/",
    element: <App />
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/experience/",
        element: <Experience/>
      },
      {
        path: "/about/",
        element: <About/>
      },
      {
        path: "/projects/:proj",
        element: <ProjectDetail/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 
<RouterProvider router={router} />
 

  

  </React.StrictMode>,
)
