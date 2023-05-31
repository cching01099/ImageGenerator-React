import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <h1>Image Generator</h1>
        </Link>
        <ul>
          <li>
            <Link to="/pexels">Pexels</Link>
          </li>
          <li>
            <Link to="/unsplash">Unsplash</Link>
          </li>
          <li>
            <Link to="/pixabay">Pixabay</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
