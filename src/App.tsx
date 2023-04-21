import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { AdminPage, LoginPage, MainPage } from './pages';

import 'app.module.scss';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />}>
        <Route path="/authorization" />
        <Route path="/registration" />
      </Route>
    </Routes>
  </Router>
);
