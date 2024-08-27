// import CounterSlice from "../CounterSlice/CounterSlice";
// import ThemeSlice from "../ThemeChanger/ThemeSlice/ThemeSlice";

import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "../Form/FormSlice";

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
const store = configureStore({
  reducer: {
    form: FormSlice,
  }
})

export default store;