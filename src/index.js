import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './redux/store/store';
import { Tienda } from './TiendaApp';

//Provider contecta la app con redux y proporcionamos la store

ReactDOM.render(
  <Provider store={store}>
      <Tienda />
  </Provider>,
  document.getElementById('root')
);

