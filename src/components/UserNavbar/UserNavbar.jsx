import { Button, Dropdown, Input, Space, Menu } from 'antd';
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import leftArrow from '../../assets/images/left-arrow.png';
import rightArrow from '../../assets/images/right-arrow.png';
import avatar from '../../assets/images/avatar.png';
import LogoutFunction from '../LogoutFunction/LogoutFunction';
import './UserNavbar.less';
import { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
const { Search } = Input;
export const UserNavbar = (props) => {
  const [arrow, setArrow] = useState(false);
  const user = JSON.parse(localStorage.getItem('loginUser'));
  const logout = LogoutFunction();
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <a onClick={logout}>Đăng xuất</a>,
        },
      ]}
    />
  );
  return (
    <nav className='nav-user'>
      <div className='nav-align'>
        <div className='nav-group'>
          {arrow ? (
            <img
              src={rightArrow}
              alt='sidebar arrow'
              onClick={() => {
                props.closeSidebar();
                setArrow(!arrow);
              }}
              className='nav-arrow'
            />
          ) : (
            <img
              src={leftArrow}
              alt='sidebar arrow'
              onClick={() => {
                props.closeSidebar();
                setArrow(!arrow);
              }}
              className='nav-arrow'
            />
          )}
        </div>

        <div className='nav-group'>
          <Search
            placeholder='Nhập mã DO CODE'
            // onSearch={onSearch}
            enterButton
          />
          <div className='nav-info'>
            <Dropdown overlay={menu}>
              <p onClick={(e) => e.preventDefault()}>
                <img
                  src={avatar}
                  alt='avatar icon'
                  className='nav-info-avatar'
                />
                {user.Name}
                <AiFillCaretDown />
              </p>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};
