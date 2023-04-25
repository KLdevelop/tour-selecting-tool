import React from 'react';
import { App } from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './models/store';

const AppElement = document.getElementById('app') || document.createElement('div');
AppElement.style.display = 'flex';
AppElement.style.flexDirection = 'column';
AppElement.style.minHeight = '100%';
AppElement.style.minWidth = '100vw';
AppElement.style.justifyContent = 'space-between';
const root = createRoot(AppElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
