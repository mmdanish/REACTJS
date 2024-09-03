import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "./FoodProductSlice";
import './EditProduct.css'

const EditProduct = ({ product, onSave }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [description, setDescription] = useState(product.description);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch(
        updateProduct({
          id: product.id,
          name,
          price,
          category,
          description,
          image: reader.result,
        })
      );
      onSave();
    };
    if (image) {
      reader.readAsDataURL(image);
    } else {
      dispatch(
        updateProduct({
          id: product.id,
          name,
          price,
          category,
          description,
          image: product.image,
        })
      );
      onSave();
    }
  };

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
    setDescription(product.description);
  }, [product]);

  return (
    <div className="container mt-4">
      <form onSubmit={onSubmit} className="shadow p-4 rounded bg-light">
        <h2 className="text-center mb-4">Edit Food Product</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            placeholder="Price"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
            placeholder="Category"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            placeholder="Description"
            rows="3"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
