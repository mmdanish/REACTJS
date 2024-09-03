import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "./FoodProductSlice";
import './ProductList.css'

const ProductList = ({ onEdit }) => {
  const products = useSelector((state) => state.foodProducts.products);
  const dispatch = useDispatch();
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Food Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4 animated-card">
            <div className="card shadow-sm">
              {product.image && (
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary"
                    onClick={() => onEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteProduct(product.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
