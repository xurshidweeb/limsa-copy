import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="">
      <Header/>
      <Outlet />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
