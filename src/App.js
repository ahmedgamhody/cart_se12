import { Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <Routes>
        <Route path="/" element={<Products></Products>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
