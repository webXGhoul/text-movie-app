import { RouteObject } from "react-router-dom";
import ErrorPage from "../ui/Error/Page";

export const ERROR_ROUTER: RouteObject = {
    path: "/error",
    element: <ErrorPage/>
}
