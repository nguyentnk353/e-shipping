import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import eShippingLogo from '../../assets/images/e-shipping-logo.png';
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
