import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import Programs from "./pages/Programs";
import Partner from "./pages/Partner";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";
import Enroll from "./pages/Enroll";
import NavBar from "./components/AppBar";
import BottomNav from "./components/Footer";
import FirstArticle from "./articles/FirstArticle";
import Loader from "./components/Loader";
import News from "./pages/News";
import HireForm from "./Forms/HireForm";
import DonateForm from "./Forms/DonateForm";
import HostForm from "./Forms/HostForm";
import AboutUs from "./pages/AboutUs";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <React.StrictMode>
          <CssBaseline />
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/apply" element={<Enroll />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/partner/hire" element={<HireForm />} />
            <Route path="/partner/donate" element={<DonateForm />} />
            <Route path="/partner/host-an-event" element={<HostForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/navigating-the-software-development-galaxy"
              element={<FirstArticle />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <BottomNav />
        </React.StrictMode>
      )}
    </>
  );
}

export default App;
