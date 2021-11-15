import './navbar.css';
import avatar from '../../assets/avatar.svg';

const Navbar = ({ sidebarOpen, openSidebar, closeSidebar }) => {
  return (
    <div
      className='navbar'
      animate={{ x: 100 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className='nav_icon' onClick={() => openSidebar()}>
        <i className='fas fa-bars'></i>
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
          <i className='fas fa-search'></i>
        </a>
        <a href=''>
          <i className='far fa-clock'></i>
        </a>
        <a href=''>
          <img src={avatar} alt='avatar' width='30' />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
