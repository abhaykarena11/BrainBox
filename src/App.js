import React from 'react';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Signup from './auth/Signup'; 
import Login from './auth/Login';
import Home from './HomePage/Home';
const appRouter =createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  }
])
 


function App() {

  return (
    <>
     <div>
     <RouterProvider router={appRouter}/>
    </div>
    </>
   
  )
}

export default App;
