import React from 'react';
import { Outlet } from 'react-router';
import ManagerSidebar from './../../../components/ManagerSidebar/ManagerSidebar';
import { ManagerNavbar } from './../../../components/ManagerNavbar/ManagerNavbar';
import { useState } from 'react';

const Manager = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className='background-layout'>
      <ManagerSidebar collapsed={collapsed} />
      <div className='main-layout'>
        <ManagerNavbar closeSidebar={toggleCollapsed} />
        <Outlet />
      </div>
    </div>
  );
};

export default Manager;
