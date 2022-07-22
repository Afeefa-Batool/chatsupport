import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Customer from "./components/customerdashboard/Customer";
import { ToastContainer, Zoom, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/signup/Signup";
import Home from "./components/Home";
const App = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/customer" element={<Customer />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
