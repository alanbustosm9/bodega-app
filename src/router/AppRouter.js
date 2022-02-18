import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../configs/app_routes";
import AuthPage from "../pages/auth";
import Bodega from "../pages/Bodega";
import NewProducts from "./../pages/NewProducts/index";
import EditProduct from "./../pages/EditProduct/index";
import { useDispatch, useSelector } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { Checking } from "./../actions/auth";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Checking());
  }, [dispatch]);

  const { checking, uid } = useSelector((state) => state.auth);

  if (checking) {
    return <h5>Espere...</h5>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path={PublicRoutes.AUTH}
            component={AuthPage}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path={PrivateRoutes.HOME}
            component={Bodega}
            isAuthenticated={!!uid}
          />
          <PrivateRoute
            exact
            path={PrivateRoutes.NEW_PRODUCTS}
            component={NewProducts}
            isAuthenticated={!!uid}
          />
          <PrivateRoute
            exact
            path={PrivateRoutes.EDIT_PRODUCTS}
            component={EditProduct}
            isAuthenticated={!!uid}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
