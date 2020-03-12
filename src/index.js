import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './context/products-context';
import './index.css';
import App from './App';




ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProductProvider>,
  document.getElementById('root')
);