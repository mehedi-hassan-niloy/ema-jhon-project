import React from 'react';
import './Header.css';
import logo from '../../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {

     const {user, logOut} = useContext(AuthContext)

     const handelLogOut = () =>{
      logOut()
      .then(result =>{})
      .catch(error =>console.error(error))
     }

    return (
        <div className='header'>
           <img src={logo} alt="" />
            <nav>
              <Link to ="/">Shop</Link>
              <Link to ="/orders">Order</Link>
              <Link to ="/inventory">Inventory</Link>
              <Link to ="/login">Login</Link>
              <Link to ="/signup">SignUp</Link>
              {
                user && <span className='text'>Welcome {user.email} <button onClick={handelLogOut}>LogOut</button></span>
              }
              
            </nav>
        </div>
    );
};

export default Header;