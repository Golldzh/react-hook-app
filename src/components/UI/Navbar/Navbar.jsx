import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const{isAuth, setIsAuth} = useContext(AuthContext);
  const logout = (e) => {
    e.preventDefault();
    setIsAuth(false)
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