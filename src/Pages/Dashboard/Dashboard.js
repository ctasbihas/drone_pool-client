import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-5 flex flex-col ml-5">
                <Outlet/>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='./addProduct'>Add Product</Link></li>
                    <li><Link to='./makeAdmin'>Make Admin</Link></li>
                    <li><Link to='./manageOrders'>Manage All Orders</Link></li>
                    <li><Link to='./manageProducts'>Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;