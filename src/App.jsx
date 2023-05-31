import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import PexelsPage from "./pages/PexelsPage";
import UnsplashPage from "./pages/UnsplashPage";
import PixabayPage from "./pages/PixabayPage";
import Page404 from "./pages/Page404";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="pexels" element={<PexelsPage />}></Route>
          <Route path="unsplash" element={<UnsplashPage />}></Route>
          <Route path="pixabay" element={<PixabayPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
