import { useRoutes } from "react-router-dom";
import React from "react";

import FeedPage from "@/pages/feed/FeedPage";
import PostPage from "@/pages/post/PostPage";
import FavoriteList from "@/pages/FavoriteList/FavoriteList";
import NotificationList from "@/pages/NotificationsList/NotificationsList";
const RootRouter = [
  {
    path: "/",
    element:<FeedPage/>,
  },

  {
    path: "/:username/post/:postId",
    element: <PostPage />,
  },
  {
    path: "/:username/:id/chat",
    element: <h1>Messenger</h1>,
  },
  {
    path: "/:username/:id/posts",
    element: <FeedPage/>,
  },
  {
    path: "/:username/:id/profile",
    element: <h1>Profile</h1>,
  },
  {
    path: "/:username/:id/logout",
    element: <h1>LogOut</h1>,
  },
  {
    path: "/:username/:id/search",
    element: <h1>Search</h1>,
  },
  {
    path: "/:username/:id/notifications",
    element:<NotificationList/>,
  },
  //
  {
    path: "/:username/:id/favorite",
    element: <FavoriteList/>,
  },
];

export const AppRouter = () => useRoutes(RootRouter);
