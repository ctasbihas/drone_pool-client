import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyProfile from './Pages/Dashboard/MyProfile';
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
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard' element={<MyProfile/>} />
          <Route path='/dashboard/addProduct' element={<AddProduct/>} />
          <Route path='/dashboard/makeAdmin' element={<MakeAdmin/>} />
          <Route path='/dashboard/manageOrders' element={<ManageOrders/>} />
          <Route path='/dashboard/manageProducts' element={<ManageProducts/>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
