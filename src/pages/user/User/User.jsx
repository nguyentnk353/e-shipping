import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router';
import UserSidebar from '../../../components/UserSidebar/UserSidebar';
import { UserNavbar } from './../../../components/UserNavbar/UserNavbar';
import './User.less';

const User = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className='background-layout'>
      <UserSidebar collapsed={collapsed} />
      <div className='main-layout'>
        <UserNavbar closeSidebar={toggleCollapsed} />
        <Outlet />
      </div>
    </div>
  );
};

export default User;
