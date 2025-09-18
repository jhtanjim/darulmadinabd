"use client";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const hideNavHandler = () => setShowNav(false);
  return (
    <div>
      <Navbar openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={hideNavHandler} />
    </div>
  );
};

export default ResponsiveNavbar;
