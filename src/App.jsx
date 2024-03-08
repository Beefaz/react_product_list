import "./index.css";
import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import States from "./pages/States.jsx";
import Cart from "./pages/Cart.jsx";
import Blog from "./pages/Blog.jsx";
import NavBar from "./components/NavBar.jsx";
import BlogNavbar from "./components/BlogNavbar.jsx";

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/cart',
    name: 'Cart',
  },
  {
    path: '/states',
    name: 'States',
  },
  {
    path: '/blog',
    name: 'Blog',
  },
];

const routes = [
  {
    path: '/',
    element: (
      <>
        <NavBar links={links}/>
        <Home/>
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <NavBar links={links}/>
        <Cart/>
      </>
    )
  },
  {
    path: '/states',
    element: (
      <>
        <NavBar links={links}/>
        <States/>
      </>
    )
  },
  {
    path: '/blog',
    element: (
      <>
        <BlogNavbar links={links}/>
        <Blog/>
      </>
    )
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <main className="main">
      <RouterProvider router={router}/>
    </main>
  )
    ;
}

export default App;
