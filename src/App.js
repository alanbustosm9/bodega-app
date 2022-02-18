import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/index";

const Bodega = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <AppRouter />
    </Provider>
  );
};

export default Bodega;
