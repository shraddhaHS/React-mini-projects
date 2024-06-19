import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/about/About.jsx' ;
import User from './components/User/User.jsx'
import './index.css'
import Github, {gitInfoLoader} from './components/github/Github.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Contact from './components/contact/Contact.jsx'
// const router = createBrowserRouter([
//   {
// path:'/',
// element: <Layout/>,
// children: [
//   {
//     path:"",
//     element: <Home />
//   },
//   {
//     path:"about",
//     element: <About />
//   },
//   {
//     path:"contact",
//     element: <Contact />
//   }
// ]
//   } 
// ])

// another method

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element ={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path= 'about' element={<About/>}  />
      <Route path= 'contact' element={<Contact/>}  />
      <Route path= 'user/:userid' element={<User/>}  />
      <Route loader={gitInfoLoader}
       path= 'github' 
       element={<Github />} 
        />

      <Route/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
