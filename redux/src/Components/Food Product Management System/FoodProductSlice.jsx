import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const FoodProductSlice = createSlice({
  name: "foodProducts",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
      prepare({ name, price, category, description, image }) {
        return {
          payload: {
            id: nanoid(),
            name,
            price,
            category,
            description,
            image,
          },
        };
      },
    },
    updateProduct: (state, action) => {
      const { id, name, price, category, description, image } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.price = price;
        existingProduct.category = category;
        existingProduct.description = description;
        existingProduct.image = image;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    fetchProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, fetchProducts } =
  FoodProductSlice.actions;
export default FoodProductSlice.reducer;
