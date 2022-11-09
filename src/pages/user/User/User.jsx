import React from 'react';
import { Outlet } from 'react-router';
import UserTest from './../../../components/UserNavbar/UserTest/UserTest';
import UserTest2 from './../../../components/UserNavbar/UserTest/UserTest2';

const User = () => {
  return (
    <div>
      {/* <UserTest /> */}
      <div style={{ display: 'flex' }}>
        {/* <UserTest2 /> */}
        <Outlet />
      </div>
      
      
    </div>
  );
};

export default User;
