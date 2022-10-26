import React from 'react';
import { Outlet } from 'react-router';
import GuestFooter from '../../components/GuestFooter/GuestFooter';
import { GuestNavbar } from '../../components/GuestNavbar/GuestNavbar';

const guest = () => {
  return (
    <div>
      <GuestNavbar />
      <Outlet />
      <GuestFooter />
    </div>
  );
};

export default guest;
