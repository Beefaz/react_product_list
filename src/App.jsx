import "./index.css";
import "./App.css";
import NavBar from "./components/NavBar.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import States from "./pages/States.jsx";
import Cart from "./pages/Cart.jsx";
import Blog from "./pages/Blog.jsx";
import BlogNavbar from "./components/BlogNavbar.jsx";

const routes = [
  {
    path: "/",
    element: <Home/>,
    name: "Home"
  },
  {
    path: "/cart",
    element: <Cart/>,
    name: "Cart"
  },
  {
    path: "/states",
    element: <States/>,
    name: "States"
  },
  {
    path: "/blog",
    element: <Blog/>,
    name: "Blog"
  },
];
const router = createBrowserRouter(routes);

const createLinks = routes.map(({path, name}, index) =>
  <a href={path} key={index}>{name}</a>
)

const App = () => {
  return (
    <>
      {window.location.pathname === "/blog"
        ? <BlogNavbar links={createLinks}/>
        : <NavBar>
          {createLinks}
        </NavBar>
      }
      <main className="main">
        <RouterProvider router={router}/>
      </main>
    </>
  );
}

export default App;
