import { Route, Routes} from "react-router-dom";
import React, { useContext } from 'react';
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Login from '../pages/Login'
import PostIdPage from "../pages/PostIdPage";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  if (isLoading) {
    return <Loader/>
  }

  return (
      isAuth 
      ?
      <Routes
      path = "/"
      element= {<App/>}
      errorElement = {<ErrorPage/>}
      >
        <Route errorElement={<ErrorPage />}>
          <Route 
          path= "/about"
          element= {<About/>}/>
          <Route
            path= "/posts"
            element= {<Posts/>}
          />
          <Route
            path= "/posts/:id"
            element= {<PostIdPage/>}
          />
          <Route
            path= "/*"
            element= {<Posts/>}
          />
        </Route>
      </Routes>
      :
      <Routes
      path = "/"
      element= {<App/>}
      errorElement = {<ErrorPage/>}>
        <Route
          path= "/*"
          element= {<Login/>}>
        </Route>
      </Routes>
  );
};

export default AppRouter;