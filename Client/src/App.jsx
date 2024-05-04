import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Carts from "./components/Carts";
import About from "./components/About";
import Orders from "./components/Orders";
import HomePage from "./components/HomePage";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <About />
        <Home />
      </>
    ),
    loader: async () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <Carts />
      </>
    ),
    loader: async () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/order",
    element: (
      <>
        <Navbar />
        <Orders />
      </>
    ),
    loader: async () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
