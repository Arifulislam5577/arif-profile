import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/blogs", element: <Blogs /> },
        { path: "/project/:id", element: <ProjectDetails /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
