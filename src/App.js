import logo from './logo.svg';
import './App.css';

import {productsList} from "./data"
import Card from "./AppComponents"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className='header_ection'>
        <nav className='header_nav'>
          <h1 className='header_logo'>Shopify</h1>
          <div className='header_icon'><ShoppingCartIcon  /></div>
        </nav>
      </header>

      <main className='main_section'>

        <h1 className='main_heading'>Product</h1>
        {/* Тут карточки */}
        <div className='main_content'>
          {productsList.map((item) => (<Card items={item} />))}
        </div>


      </main>




    </div>
  );
}

export default App;
