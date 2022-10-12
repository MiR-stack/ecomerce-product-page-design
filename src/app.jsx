import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/product/product";
import product from "./data";
import useCart from "./hooks/useCart";
import { createContext } from "react";

export const CartContext = createContext();

const App = () => {
  return (
    <CartContext.Provider value={useCart()}>
      <Router>
        <Routes>
          <Route path="/" element={<Product data={product} />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
