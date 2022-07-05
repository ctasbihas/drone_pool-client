import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import Footer from './Pages/Shared/Footer';
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
