import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import NotFound from "./pages/NotFound";
import DetailsBook from "./components/home/DetailsBook";
import Dashboard from "./pages/Dashboard";
const App = () => {
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/books",
          element: <Books />,
        },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/detailsBook/:id", element: <DetailsBook /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={routing} />;
};

export default App;
