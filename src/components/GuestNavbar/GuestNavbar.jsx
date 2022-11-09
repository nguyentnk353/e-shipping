import React from 'react';
import { Select, Button } from 'antd';
import { AiFillCaretDown, AiFillPhone } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link, useMatch, useResolvedPath, useNavigate } from 'react-router-dom';
import eShippingLogo from '../../assets/images/e-shipping-logo.png';
import './GuestNavbar.less';
const { Option } = Select;
export const GuestNavbar = () => {
  const navigate = useNavigate();
  function logoOnclick() {
    navigate('/home', { replace: true });
  }
  return (
    <div className='navbar-user'>
      <ul className='nav-left-right'>
        <img
          src={eShippingLogo}
          alt='logo'
          className='nav-logo'
          onClick={logoOnclick}
          style={{ cursor: 'pointer' }}
        />
        <div className='dropdown'>
          <a className='dropbtn'>
            Giao nhận hàng <AiFillCaretDown />
          </a>
          <div className='dropdown-content'>
            <CustomLink to='#'>Tra cứu vận đơn</CustomLink>
            <CustomLink to='#'>Tra cước & thời gian vận chuyển</CustomLink>
            <CustomLink to='#'>Danh sách bưu cục</CustomLink>
            <CustomLink to='#'>Chính sách</CustomLink>
            <CustomLink to='#'>Bảng giá</CustomLink>
          </div>
        </div>
        <div className='dropdown'>
          <a className='dropbtn'>
            Dịch vụ <AiFillCaretDown />
          </a>
          <div className='dropdown-content'>
            <CustomLink to='#'>Chuyển phát hỏa tốc</CustomLink>
            <CustomLink to='#'>Chuyển phát nhanh</CustomLink>
            <CustomLink to='#'>Chuyển phát tiết kiệm (MES)</CustomLink>
            <CustomLink to='#'>Chuyển phát đường bộ</CustomLink>
            <CustomLink to='#'>Chuyển phát thu hộ (COD)</CustomLink>
            <CustomLink to='#'>Chuyển phát quốc tế</CustomLink>
            <CustomLink to='#'>Thuê xe nguyên chuyến</CustomLink>
          </div>
        </div>
        <CustomLink to='#'>Liên hệ</CustomLink>
      </ul>
      <ul className='nav-left-right'>
        <a className='phone'>
          <AiFillPhone className='phone-icon' />
          <span className='phone-number'>0905146956</span>
        </a>
        <div className='nav-login'>
          <Link to='/login'>
            <Button>Đăng nhập</Button>
          </Link>
          <Link to='/register'>
            <Button type='primary'>Đăng Ký</Button>
          </Link>
        </div>
      </ul>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
