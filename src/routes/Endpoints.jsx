import { Routes, Route } from "react-router-dom";
import { Cart, Home } from "../pages";

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export { Endpoints as Routes };
