import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './pages/About';
import Posts from './pages/Posts'
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter,  RouterProvider} from 'react-router-dom';
import PostIdPage from './pages/PostIdPage';
import { Navigate } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/posts",
        element: <Posts/>,
      }, 
      {
        path: "/posts/:id",
        element: <PostIdPage/>,
      }, 
      {
        path: "/*",
        element: <Navigate to="/" replace/>,
      }, 
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

 
