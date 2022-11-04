import React from "react";
import { UserNavbar } from "../../../components/UserNavbar/UserNavbar";
import { UserSidebar } from "../../../components/UserSidebar/UserSidebar";

const UserHome = () => {
  return (
    <div>
      <UserNavbar/>
      <UserSidebar />
    </div>
  );
};

export default UserHome;
