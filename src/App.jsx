import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Contact from "./Components/Contact";

function App() {
    const pathName = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathName])
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
