import React from 'react';
import { Outlet } from 'react-router';
import { useState } from 'react';
import AdminSidebar from '../../../components/AdminSidebar/AdminSidebar';
import { AdminNavbar } from '../../../components/AdminNavbar/AdminNavbar';

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className='background-layout'>
      <AdminSidebar collapsed={collapsed} />
      <div className='main-layout'>
        <AdminNavbar closeSidebar={toggleCollapsed} />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
