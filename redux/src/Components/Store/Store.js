// import CounterSlice from "../CounterSlice/CounterSlice";
// import ThemeSlice from "../ThemeChanger/ThemeSlice/ThemeSlice";
// import FormSlice from "../Form/FormSlice";

import { configureStore } from "@reduxjs/toolkit";
import FoodProductSlice from "../Food Product Management System/FoodProductSlice";


//Counter -------------------------------------
// const store = configureStore({
//   reducer: {
//     counter: CounterSlice,
//   },
// });


//ThemeSwitcher -------------------------------------
// const store = configureStore({
  //   reducer: {
    //     theme: ThemeSlice,
    //   }
    // })
    

//Form -------------------------------------
// const store = configureStore({
//   reducer: {
//     form: FormSlice,
//   }
// })



//Add User -------------------------------------
// const store = configureStore({
//   reducer: {
//     users: userSlice,
//   }
// })

// export default store;

// Food Product Management System--------------------------------
const store = configureStore({
  reducer: {
    foodProducts: FoodProductSlice
  }
})

export default store