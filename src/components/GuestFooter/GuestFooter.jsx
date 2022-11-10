import { Button, Input } from 'antd';
import React from 'react';
import logo from '../../assets/images/e-shipping-logo.png';
import checkFooter from '../../assets/images/checkFooter.png';
import zalo from '../../assets/images/zalo_icon.png';
import fb from '../../assets/images/facebook_icon.png';
import youtube from '../../assets/images/youtube_icon.png';
import appStore from '../../assets/images/app-store.png';
import './GuestFooter.less';
import { MdPlace } from 'react-icons/md';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { FaPaperPlane } from 'react-icons/fa';
const GuestFooter = () => {
  return (
    <div>
      <div className='footer-top'>
        <div className='footer-top-align'>
          <h1>HOTLINE: 0905146956</h1>
          <p>
            Liên hệ ngay E-shipping để được tư vấn chi tiết và có giá dịch vụ
            tốt nhất!
          </p>
          <h2>Lấy hàng tận nơi - Giao hàng tận tay - Phục vụ tận tâm</h2>
          <div className='footer-button'>
            <button className='default-button'>
              <MdPlace className='footer-button-icon' />{' '}
              <span>Tìm bưu cục gần bạn</span>
            </button>
            <button className='primary-button'>
              <AiOutlineFileSearch className='footer-button-icon' />{' '}
              <span>Tra cứu giá cước</span>
            </button>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-align'>
          <div className='footer-bottom-content-top'>
            <div className='footer-bottom-left'>
              <img src={logo} alt='logo' />
              <p>
                <b>Trụ sở chính:</b> Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ,
                Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
                <br />
                <b>Giờ làm việc:</b> 7:00 - 20:00
                <br />
                <b>Email:</b> daihoc.hcm@fpt.edu.vn
                <br />
                <b>Hotline:</b> (028) 7300 5588
              </p>
              <img src={checkFooter} alt='Check footer' />
            </div>
            <div className='footer-bottom-middle'>
              <div className='footer-bottom-middle-content'>
                <h3>Công ty</h3>
                <p>Giới thiệu</p>
                <p>Nhân sự NTL</p>
                <p>Mạng lưới Bưu cục</p>
                <p>Tuyển dụng</p>
                <p>Tin tức</p>
              </div>
              <div className='footer-bottom-middle-content'>
                <h3>Hỗ trợ khách hàng</h3>
                <p>Câu hỏi thường gặp</p>
                <p>Điều khoản Website</p>
                <p>Chính sách bảo mật</p>
                <p>Liên hệ</p>
              </div>
              <div className='footer-bottom-middle-content'>
                <h3>Chính sách</h3>
                <p>Khiếu nại & Đền bù</p>
                <p>Quy định Gửi & Nhận hàng</p>
                <p>Trách nhiệm các Bên</p>
                <p>Hàng hoá cấm gửi</p>
              </div>
            </div>
            <div className='footer-bottom-right'>
              <div className='footer-bottom-right-icon'>
                <img src={zalo} alt='Footer icon' className='footer-icon' />
                <img src={fb} alt='Footer icon' className='footer-icon' />
                <img src={youtube} alt='Footer icon' className='footer-icon' />
              </div>
              <Input
                placeholder='Nhập email để nhận thông tin'
                suffix={<FaPaperPlane style={{ opacity: 0.5 }} />}
                style={{ width: 260 }}
              />
              <img
                src={appStore}
                alt='Footer icon'
                className='footer-appstore'
              />
            </div>
          </div>
          <div className='footer-bottom-content-bottom'>
            <p>
              Copyright Ⓒ 2022 by CÔNG TY CỔ PHẦN ĐẦU TƯ THƯƠNG MẠI PHÁT TRIỂN
              E-Shipping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestFooter;
