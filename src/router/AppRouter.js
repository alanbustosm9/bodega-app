import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from '../configs/app_routes';
import AuthPage from '../pages/auth';
import Bodega from '../pages/Bodega';
import NewProducts from './../pages/NewProducts/index';

const AppRouter = () => {
  return (
      <Router>
        <Routes>
            <Route path={PublicRoutes.AUTH} element={<AuthPage />} />

            <Route path={PrivateRoutes.HOME} element={<Bodega />} />
            <Route path={PrivateRoutes.NEW_PRODUCTS} element={<NewProducts />} />
        </Routes>

      </Router>
  )
}

export default AppRouter