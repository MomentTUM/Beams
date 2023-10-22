import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import NewsFeed from '../pages/NewsFeed';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Member from '../pages/Member';
import Coupon from '../pages/Coupon';

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <NewsFeed /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/member', element: <Member /> },
        { path: '/member/coupon', element: <Coupon /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}
