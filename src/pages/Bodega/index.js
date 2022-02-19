import React, { useEffect, useState } from "react";
import Product from "../../components/Product";
import Navbar from "./../../components/Navbar/index";
import ModalProduct from "./../../components/Modal/index";

import AddNewFab from "./../../components/AddNewFab/index";
import { useDispatch, useSelector } from "react-redux";
import { productsLoaded } from "../../actions/products";

const Bodega = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(productsLoaded());
  }, [dispatch]);

  const productPagination = () => {
    return products.slice(currentPage, currentPage + 6);
  };

  const nextPage = () => {
    if (productPagination().length > 1) setCurrentPage(currentPage + 6);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 6);
  };

  return (
    <div>
      <Navbar />
      <h2 className="text-center my-5">Listado de Productos</h2>

      <div className="text-center my-3 mr-2">
        <button className="btn btn-primary" onClick={prevPage}>
          Anterior
        </button>
        &nbsp;
        <button className="btn btn-primary" onClick={nextPage}>
          Siguiente
        </button>
      </div>
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
          {productPagination().map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </tbody>
      </table>
      <ModalProduct />
      <AddNewFab />
    </div>
  );
};

export default Bodega;
