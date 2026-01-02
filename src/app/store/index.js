import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";
import headerReducer from "./header/headerSlice"

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    header: headerReducer,

    //місце для вашіх редюсерів :)
  },
});
