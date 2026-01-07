import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";
import headerReducer from "./header/headerSlice"
import notificationsReducer from './notifications/notificationsSlice'
import searchSliceReducer from './search/searchSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    header: headerReducer ,
    notifications: notificationsReducer,
    search: searchSliceReducer,

    //місце для вашіх редюсерів :)
  },
});
