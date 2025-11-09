import { useState } from 'react';
import * as ReactDOM from "react-dom";
import { 
  createBrowserRouter,
   RouterProvider
} from "react-router-dom";
import Dashboard from './compenents/Dashboard';
import About from './compenents/About';
import Home from './compenents/Home';
import Login from './compenents/Login';
import SignUp from './compenents/SignUp';
import Navbar from './compenents/Navbar';
import PropertyPage from './compenents/Properties/PropertyPage';
import Admin from './compenents/Admin';
import PropertyList from './compenents/PropertyList';
import Review from './compenents/Review';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <Navbar/>
        <Home />
      </div>
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/login",
      element: <Login />
    },
    {
      path:"/signup",
      element: <SignUp />
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    },
    {
      path:"/admin",
      element:<Admin/>
    },
     {
      path:"/property",
      element:<PropertyPage/>
    },
    {
      path:"/propertylist/:id",
       element: <PropertyList />
    },
    {
       path:"/review", 
       element : <Review /> 
    }
  ]
)




function App() {

  return (
    <>
       <RouterProvider router={router} />

    </>
  )
}

export default App
