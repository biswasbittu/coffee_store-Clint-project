import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Error from "./Error/Error.jsx";
import Addcoffee from "./components/AddCoffee/Addcoffee.jsx";
import UpdatedCoffee from "./components/UpdatedCoffee/UpdatedCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`http://localhost:5000/coffee`),
      },
      {
        path: "/addcoffee",
        element: <Addcoffee />,
      },
      {
        path: "/updatedcoffee/:id",
        element: <UpdatedCoffee />,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
