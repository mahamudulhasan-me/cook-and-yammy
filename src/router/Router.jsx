import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Pages/Blog/Blog";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import NotFound404 from "../components/Shared/NotFound404/NotFound404";
import Main from "../layouts/Main";
import RecipeWithChef from "../layouts/RecipeWithChef";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blog />,
        loader: () =>
          fetch(
            `https://cook-and-yammy-server-mahamudulhasan-me.vercel.app/blogs`
          ),
      },
      {
        path: "chef/:name",
        element: (
          <ProtectedRoute>
            <RecipeWithChef />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cook-and-yammy-server-mahamudulhasan-me.vercel.app/chef/${params.name}`
          ),
      },
      {
        path: "signInSignUp",
        element: <Login />,
      },
    ],
  },
]);
export default router;
