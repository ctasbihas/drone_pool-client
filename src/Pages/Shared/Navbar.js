import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost upper-case text-xl">Drone Pool</a>
                <label htmlFor="my-drawer-2" className="btn btn-info  lg:hidden navbar-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='mx-2'><Link to='/'>Home</Link></li>
                    <li className='mx-2'><Link to='/blogs'>Blogs</Link></li>
                    <li className='mx-2'><Link to='/portfolio'>Portfolio</Link></li>
                    {
                        user && <>
                            <li className='mx-2'><Link to='/dashboard'>Dashboard</Link></li>
                            </>
                    }
                    {user ? <button className="btn btn-outline" onClick={() => signOut(auth) }>Log out</button> : <li className='mx-2'><Link to='/login'>Login</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;