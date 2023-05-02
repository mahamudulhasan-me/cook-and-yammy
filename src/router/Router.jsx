import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Main from "../layouts/Main";
import RecipeWithChef from "../layouts/RecipeWithChef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "chef/:name",
        element: <RecipeWithChef />,
        loader: ({ params }) =>
          fetch(`http://localhost:6969/chef/${params.name}`),
      },
    ],
  },
]);
export default router;
