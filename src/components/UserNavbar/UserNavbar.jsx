import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import eShippingLogo from '../../assets/images/eship-logo-dark.png';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import './UserNavbar.less';
export const UserNavbar = () => {
  return (
    <nav className='nav'>
      <ul className='ul-left'>
        <Link to='/' className='site-title'>
          <img src={eShippingLogo} alt='Logo' />
        </Link>
        <CustomLink to='/home'>Home</CustomLink>
        <CustomLink to='/service'>Service</CustomLink>
      </ul>
      <ul className='ul-right'>
        <input type='search' placeholder='Nhập mã' />
        <button type="submit"><i className="fa fa-search"></i></button>
        <span className='user-login'>0905146956</span>
        <AccountBoxIcon className='acc-icon' />
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
