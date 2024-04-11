import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store";
import { rootRouter } from "./router";
import BaseLayout from "./layouts/BaseLayout";

const AppEntry = () => {
  const router = rootRouter;

  return (
    <Provider store={store()}>
        <RouterProvider router={router} />
    </Provider>
  );
};

export default AppEntry;
