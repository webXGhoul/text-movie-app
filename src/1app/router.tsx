import { HOME_ROUTER } from "@/2pages/home/model/urls";
import { createBrowserRouter } from "react-router-dom";
import AppEntry from "./appEntry";
import BaseLayout from "./layouts/BaseLayout";
import { ERROR_ROUTER } from "@/2pages/error/model/urls";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      HOME_ROUTER,
      ERROR_ROUTER
    ],
  },
]);
