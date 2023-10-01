import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import Programs from "./pages/Programs";
import Partner from "./pages/Partner";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";
import NavBar from "./components/AppBar";
import BottomNav from "./components/Footer";

function App() {
  return (
    <React.StrictMode>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <BottomNav />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
