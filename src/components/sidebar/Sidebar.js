import './sidebar.css';
import logo from '../../assets/logo.png';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? 'sidebar-responsive' : ''} id='sidebar'>
      <div className='sidebar__title'>
        <div className='sidebar__image'>
          <img src={logo} alt='logo' />
          <h1>Admin React</h1>
          <i
            className='fa fa-times'
            id='sidebarIcon'
            onClick={() => closeSidebar()}
          ></i>
        </div>
      </div>
      <div className='sidebar__menu'>
        <div className='sidebar__link active-menu-link'>
          <i className='fa fa-home'></i>
          <a href='#'>Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className='sidebar__link'>
          <i className='fa fa-user-secret'></i>
          <a href='#'>Admin Management</a>
        </div>
        <div className='sidebar__link'>
          <i className='far fa-building'></i>
          <a href='#'>Company Management</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-wrench'></i>
          <a href='#'>Employee Management</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-archive'></i>
          <a href='#'>Warehouse</a>
        </div>
        <div className='sidebar__link'>
          <i className='far fa-handshake'></i>
          <a href='#'>Contracts</a>
        </div>
        <h2>Leave</h2>
        <div className='sidebar__link'>
          <i className='fa fa-question'></i>
          <a href='#'>Requests</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-sign-out'></i>
          <a href='#'>Leave Policy</a>
        </div>
        <div className='sidebar__link'>
          <i className='far fa-calendar-check'></i>
          <a href='#'>Special Days</a>
        </div>
        <div className='sidebar__link'>
          <i className='far fa-file'></i>
          <a href='#'>Apply for leave</a>
        </div>
        <h2>PAYROLL</h2>
        <div className='sidebar__link'>
          <i className='fas fa-money-check-alt'></i>
          <a href='#'>Payroll</a>
        </div>
        <div className='sidebar__link'>
          <i className='fas fa-brifcase'></i>
          <a href='#'>Paygrade</a>
        </div>
        <div className='sidebar__logout'>
          <i className='fa fa-power-off'></i>
          <a href='#'>Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
