import React from 'react';
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { setIsAuth } from '../../../toolkitRedux/authReduser';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(setIsAuth())
    localStorage.removeItem('auth')
  }
  return (
    <div className='navbar'>
        <MyButton style ={{marginRight: 'auto'}} onClick={logout}>ВЫЙТИ</MyButton>
        <div style ={{marginRight: '10px'}} className='navbar__items'>
          <NavLink style ={{marginRight: '10px'}}to={`about`}>О сайте</NavLink>
          <NavLink style ={{marginRight: '10px'}} to={`posts`}>Посты</NavLink>
        </div>
    </div>
  );
};

export default Navbar;