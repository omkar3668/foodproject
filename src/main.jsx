import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import Home from './Components/Home.jsx'
import  About  from './Components/About.jsx'
import Recipe from './Components/Recipe.jsx'
import Blog from './Components/Blog.jsx'
import ContactUs from './Components/ContactUs.jsx'
import CardSlider from './Components/CardSlider.jsx'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'
import  Error  from './Components/Error.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path= '' element={<Home />}/>
       <Route path='about' element= {<About />}/>
       <Route path = 'recipe' element = {<Recipe />}/>
       <Route path='blog' element = {<Blog />}/>
       <Route path ='contactus' element = {<ContactUs />}/>
       <Route path ='register' element = {<Register />}/>
       <Route path ='login' element = {<Login />}/>
       <Route path ='*' element = {<Error />}/>
      </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)
