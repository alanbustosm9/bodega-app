import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { productEdited } from "../../actions/products";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EditProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    description: "",
  });

  const { productEdit } = useSelector((state) => state.product);
  const { name, quantity, price, description } = product;

  useEffect(() => {
    setProduct(productEdit);
  }, [productEdit]);

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    dispatch(productEdited(product));
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight bold">
              Editar Producto
            </h2>

            <form onSubmit={handleSubmitEdit}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Cantidad</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Cantidad"
                  name="quantity"
                  value={quantity}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Precio</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio"
                  name="price"
                  value={price}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Descripción</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descripción"
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold d-block w-100"
              >
                Guardar cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
