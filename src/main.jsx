import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Projects from './components/projects.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Skills from './components/skils.jsx'
import Info from './components/Info.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App style="duration-200"/>,
    children:[
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"Projects",
        element:<Projects/>,
      },
      {
        path:"Skills",
        element:<Skills/>,
      },
      {
        path:"Information",
        element:<Info/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
