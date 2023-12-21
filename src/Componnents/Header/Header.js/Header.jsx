import React from 'react';
import './Header.css';
import logo from '../../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Banner from '../Home/Home/Banner';

const Header = () => {

  const { user, logOut } = useContext(AuthContext)

  const handelLogOut = () => {
    logOut()
      .then(result => { })
      .catch(error => console.error(error))
  }

  return (
    /*   <div className='header'>
         <img src={logo} alt="" />
          <nav>
            <Link to ="/">Home</Link>
            <Link to ="/shop">Shop</Link>
            <Link to ="/orders">Order</Link>
            <Link to ="/inventory">Inventory</Link>
            <Link to ="/login">Login</Link>
            <Link to ="/signup">SignUp</Link>
            {
              user && <span className='text'>Welcome {user.email} <button onClick={handelLogOut}>LogOut</button></span>
            }
            
          </nav>
      </div> */

    <div>
      <div className="navbar bg-green-500">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/orders">Order</Link></li>
              <li><Link to="/inventory">Inventory</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li> <Link to="/signup">SignUp</Link></li>
              {
                user && <span className='text'>Welcome {user.email} <button onClick={handelLogOut}>LogOut</button></span>
              }
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg text-white">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/orders">Order</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li> <Link to="/signup">SignUp</Link></li>
            {
              user && <span className='text'>Welcome {user.email} <button onClick={handelLogOut}>LogOut</button></span>
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;