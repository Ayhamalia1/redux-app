import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Counter from './Components/counter/Counter';
import Product from './Components/products/Product';
import Layout from './Components/layout/Layout';


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path: "products",
          element:<Product/>,
        },
        {
          path: "counter",
          element:<Counter/>,
        }
      ]
    }
   
  ]);
  return (
    <RouterProvider router={router} />
    )
}
