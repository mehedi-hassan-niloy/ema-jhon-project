import React from 'react';
import Header from '../Header/Header.js/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='md:mr-6 md:ml-6'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;