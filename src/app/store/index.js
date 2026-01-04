import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";
import headerReducer from "./header/headerSlice"
import notificationsReducer from './notifications/notificationsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    header: headerReducer ,
    notifications: notificationsReducer,

    //місце для вашіх редюсерів :)
  },
});
