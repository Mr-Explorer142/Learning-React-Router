import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <div className="body-bg">
        <Home></Home>
        <Products></Products>
        <NotFound></NotFound>
        <About></About>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
