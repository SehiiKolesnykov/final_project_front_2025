import { useRoutes } from "react-router-dom";
import React from "react";
import FeedPage from "@/pages/feed/FeedPage";
import NotificationList from "@/pages/NotificationsList/NotificationsList";
const RootRouter = [
  {
    path: "/",
    element:'',
  },
  {
    path: "/users/:id",
    element: <h1>User Profile Page</h1>,
  },
  {
    path: "/users/:id/posts",
    element: <h1>Posts</h1>,
  },
  {
    path: "/users/:id/profile",
    element: <h1>Profile</h1>,
  },
  {
    path: "/users/:id/logout",
    element: <h1>LogOut</h1>,
  },
  {
    path: "/users/:id/search",
    element: <h1>Search</h1>,
  },
  {
    path: "/users/:id/notifications",
    element:<NotificationList/>,
  },
  {
    path: "/users/:id/favorite",
    element: <h1>Favorites</h1>,
  },
];

export const AppRouter = () => useRoutes(RootRouter);
