import { configureStore } from '@reduxjs/toolkit';

import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
const store = configureStore({reducer: rootReducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    
      <App />
    
    </Provider>
  </React.StrictMode>
);