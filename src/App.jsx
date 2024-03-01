import "./index.css";
import "./App.css";
import NavBar from "./components/NavBar.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import States from "./pages/States.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/states",
    element: <States/>,
  },
]);

const App = () => {

  return (
    <>
      <NavBar>
        <a href={`/`}>Home</a>
        <a href={`/states`}>States</a>
      </NavBar>
      <main className="main">
        <RouterProvider router={router}/>
      </main>
    </>
  );
}

export default App;
