import { React } from 'react';
import { BrowserRouter} from "react-router-dom";
import './styles/App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { Provider } from 'react-redux';
import {store} from './toolkitRedux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
