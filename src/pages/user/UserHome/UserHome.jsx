import React from 'react';
import LogoutFunction from '../../../components/LogoutFunction/LogoutFunction';
// import { Logout } from '../../../components/LogoutFunction/LogoutFunction';

const UserHome = () => {
  const logout = LogoutFunction();
  return (
    <div>
      UserHome
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default UserHome;
