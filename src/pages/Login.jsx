import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import {useDispatch} from 'react-redux';
import { setIsAuth } from '../toolkitRedux/authReduser';

const Login = () => {
  const dispatch = useDispatch();
  const login = (e) => {
    e.preventDefault();
    localStorage.setItem('auth', 'true')
    dispatch(setIsAuth())
  }
  return (
    <div>
      <h1 style ={{margin: '15px 0'}}>Cтраница для логина</h1>
      <form onSubmit={login}>
        <MyInput type='email' placeholder='Введите логин'></MyInput>
        <MyInput type='password' placeholder='Введите пароль'></MyInput>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;