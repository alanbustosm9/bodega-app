import React, { useEffect } from "react";
import Product from "../../components/Product";
import Navbar from "./../../components/Navbar/index";
import ModalProduct from "./../../components/Modal/index";

import AddNewFab from "./../../components/AddNewFab/index";
import { useDispatch, useSelector } from "react-redux";
import { productsLoaded } from "../../actions/products";

const Bodega = () => {
  const { products } = useSelector((state) => state.bodega);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsLoaded());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <h2 className="text-center my-5">Listado de Productos</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripción</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0
            ? "No hay productos"
            : products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </tbody>
      </table>
      <ModalProduct />

      <AddNewFab />
    </div>
  );
};

export default Bodega;
