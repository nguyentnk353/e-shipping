import React from 'react';
import { Outlet, Route, Routes } from 'react-router';
import UserHome from './UserHome/UserHome';
import UserService from './UserService/UserService';

const User = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default User;
