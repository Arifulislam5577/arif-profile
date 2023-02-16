import { useState } from "react";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/blogs", element: <Blogs /> },
      ],
    },
  ]);

  if (loading) {
    return <Loader />;
  }
  return <RouterProvider router={router} />;
}
