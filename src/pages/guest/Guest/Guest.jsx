import React from 'react';
import { Outlet } from 'react-router';
import { GuestNavbar } from './../../../components/GuestNavbar/GuestNavbar';
import GuestFooter from './../../../components/GuestFooter/GuestFooter';

const Guest = () => {
  return (
    <div>
      <GuestNavbar />
      <Outlet />
      <GuestFooter />
    </div>
  );
};

export default Guest;
