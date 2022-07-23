import Dashboard from "../DashBoard/DashBoard";
import Header from "../Header/Header";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import CartPage from "../CartPage/CartPage";

export default function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Routes>
        <Route path="/*" element={<Dashboard />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </div>
  );
}
