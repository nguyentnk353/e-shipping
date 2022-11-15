import { Footer } from 'antd/lib/layout/layout';
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
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Copyright Ⓒ 2022 by CÔNG TY CỔ PHẦN ĐẦU TƯ THƯƠNG MẠI PHÁT TRIỂN
          E-Shipping
        </Footer>
      </div>
    </div>
  );
};

export default User;
