import {React}from 'react';
import { Outlet } from "react-router-dom";
import './styles/App.css';
import Navbar from './components/UI/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>

  )
}

export default App;
