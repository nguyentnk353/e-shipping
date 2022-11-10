import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import eShippingLogo from "../../assets/images/eship-logo-dark.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Input, Space } from "antd";
import "./UserNavbar.less";
import avtProfile from "../../assets/images/man.png";
export const UserNavbar = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <nav className="nav">
      <ul className="ul-left">
        <Link to="/" className="site-title">
          <img src={eShippingLogo} alt="Logo" />
        </Link>
        <CustomLink to="/user/home">Home</CustomLink>
        <CustomLink to="/service">Service</CustomLink>
      </ul>
      <ul className="ul-right">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <span className="user-login">0905146956</span>
        <img src={avtProfile} />
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
