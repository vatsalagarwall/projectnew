import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./Components/Cart";
import ProductList from "./Components/ProductList";
import { useState } from "react";
import Success from "./Components/Success";
import Yourorders from "./Components/Yourorders";
import AboutUs from "./pages/AboutUs";
import Start from "./pages/Start";
import CartStart from "./Components/CartStart";



function App() {

  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  // Function to set the user ID
  const setUserIdHandler = (id) => {
    setUserId(id);
  };



  const addItemToCart = (item) => {
    setCart(prev => [...prev, item]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/products" element={<ProductList cart={cart} addItemToCart={addItemToCart} />} />
        <Route path="/login" element={<Login setUserId={setUserIdHandler} />} />
        <Route path="/signup" element={<Signup setUserId={setUserIdHandler} />} />
        <Route path="/cart" element={<Cart cart={cart} userId={userId} />} />
        <Route path="/success" element={<Success />} />
        <Route path="/your-orders" element={<Yourorders userId={userId} />} />
        <Route path="/about-us" element={<AboutUs cart={cart} />} />
        <Route path="/cart-start" element={<CartStart />} />
      </Routes>
    </div>
  );
}
export default App;