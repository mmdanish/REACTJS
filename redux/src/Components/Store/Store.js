// import { configureStore } from "@reduxjs/toolkit";
// import CounterSlice from "../CounterSlice/CounterSlice";

import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../ThemeChanger/ThemeSlice/ThemeSlice";

// const store = configureStore({
//   reducer: {
//     counter: CounterSlice,
//   },
// });

// export default store;

const store = configureStore({
  reducer: {
    theme: ThemeSlice,
  }
})

export default store;