import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import { Header, Footer } from './components';
import {
  AdminPage,
  LoginPage,
  MainPage,
  AuthBlock,
  RegistrationBlock,
  OverviewPage,
} from './pages';

import 'app.module.scss';

export const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route index element={<MainPage />} />
        <Route path="overview" element={<OverviewPage />} />
      </Route>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />}>
        <Route index element={<AuthBlock />} />
        <Route path="authorization" element={<Navigate replace to="/login" />} />
        <Route path="registration" element={<RegistrationBlock />} />
      </Route>
    </Routes>
  </Router>
);
