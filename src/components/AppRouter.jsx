import { Route, Routes} from "react-router-dom";
import {React, useEffect}from 'react';
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Login from '../pages/Login'
import PostIdPage from "../pages/PostIdPage";
import { useSelector } from "react-redux"
import Loader from "./UI/Loader/Loader";
import { useDispatch } from 'react-redux';
import { setIsAuth } from "../toolkitRedux/authReduser";
import { setIsLoading } from "../toolkitRedux/loadingReducer";


const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(setIsLoading())
    if(localStorage.getItem('auth')) {
      dispatch(setIsAuth())
    }
  },[])

  const isAuth = useSelector(state => state.auth.isAuth);
  const isLoading = useSelector(state => state.loading.isLoading);
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