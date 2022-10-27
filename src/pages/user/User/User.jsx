import React from 'react';
import { Outlet, Route, Routes } from 'react-router';

const User = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default User;
