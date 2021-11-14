import './navbar.css';
import avatar from '../../assets/avatar.svg';

import React from 'react';

const Navbar = ({ sidebarOpen, openSidebar, closeSidebar }) => {
  return (
    <div className='navbar'>
      <div className='nav_icon' onClick={() => openSidebar()}>
        <i class='fas fa-bars'></i>
      </div>
      <div className='navbar__left'>
        <a href='#'>subscriber</a>
        <a href='#'>video managment</a>
        <a href='#' className='active_link'>
          admin
        </a>
      </div>
      <div className='navbar__right' onClick={() => closeSidebar()}>
        <a href=''>
          <i class='fas fa-search'></i>
        </a>
        <a href=''>
          <i class='far fa-clock'></i>
        </a>
        <a href=''>
          <img src={avatar} alt='avatar' width='30' />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
