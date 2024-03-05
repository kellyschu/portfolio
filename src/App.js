import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
// import axios from 'axios';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:category" element={<SelectCategoryPage />} />
      <Route path="/mostloved" element={<MostLovedPage />} />
      <Route path="/mosttalkedabout" element={<MostCommentedPage />} />
      <Route path="/somethingnew" element={<SomethingNewPage />} />
      <Route path="/mostsaved" element={<MostSavedPage />} />
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <nav>
    //       <ul>
    //         <li>Home</li>
    //         <li>About</li>
    //         <li>Projects</li>
    //         <li>Contact</li>
    //       </ul>
    //     </nav>
    //     <span className="hero-img"></span>
    //     <h1>My App</h1>
    //   </header>
    //   <main></main>
    //   <footer></footer>
    // </div>
  );
}

export default App;
