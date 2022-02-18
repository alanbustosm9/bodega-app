import React from "react";
import Product from "../../components/Product";
import Navbar from "./../../components/Navbar/index";

const Bodega = () => {
  const products = [
    {
      id: 1,
      name: "Coca cola",
      quantity: 10,
      price: 1000,
      description: "Coca Cola de 1L",
    },
    {
      id: 2,
      name: "Coca cola",
      quantity: 10,
      price: 1000,
      description: "Coca Cola de 1L",
    },
    {
      id: 3,
      name: "Coca cola",
      quantity: 10,
      price: 1000,
      description: "Coca Cola de 1L",
    },
  ];

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
    </div>
  );
};

export default Bodega;
