// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reserve from "./pages/Reserve";
import OrderOnline from "./pages/OrderOnline";
import OrderReceipt from "./pages/OrderReceipt";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import ReservationDetail from "./pages/ReservationDetail";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#F5F0EB] text-[#3E2C24]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/reservation-detail" element={<ReservationDetail />} />
            <Route path="/order" element={<OrderOnline />} />
            <Route path="/receipt" element={<OrderReceipt />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;