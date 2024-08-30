import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },

    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const u = state.find((user) => user.id === id);
      if (u) {
        u.name = name;
        u.email = email;
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      const u = state.find((user) => user.id === id);
      if (u) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export default userSlice.reducer;
export const { addUser, editUser, deleteUser } = userSlice.actions;
