import { Button, Input } from 'antd';
import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdPlace, MdPostAdd } from 'react-icons/md';
import { SlArrowUp } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import service1 from '../../../assets/images/plan-fast.png';
import service2 from '../../../assets/images/fast-delivery.png';
import service3 from '../../../assets/images/logistics.png';
import service4 from '../../../assets/images/normal-delivery.png';
import service5 from '../../../assets/images/save-money.png';
import service6 from '../../../assets/images/global.png';
import service7 from '../../../assets/images/hired-truck.png';
import service8 from '../../../assets/images/warehouse.png';
import warehousebanner from '../../../assets/images/banner-logistics.png';
import './GuestHome.less';

const GuestHome = () => {
  return (
    <div>
      <div className='first-content'>
        <div className='first-content-align'>
          <h1>Hơn cả một dịch vụ</h1>
          <div className='first-content-box-row'>
            <div className='first-content-box1'>
              <span className='first-content-box1-head'></span>
              <div className='first-content-box1-cube'>
                <Link to='#'>
                  <span>
                    <MdPostAdd className='cube-icon' />
                  </span>
                  <p>Tạo vận đơn</p>
                </Link>
              </div>
            </div>
            <div className='first-content-box2'>
              <span className='first-content-box2-head' />
              <div className='first-content-box2-cube'>
                <Link to='#'>
                  <span>
                    <AiOutlineFileSearch className='cube-icon' />
                  </span>
                  <p>Tra cứu vận đơn</p>
                </Link>
              </div>
            </div>
            <div className='first-content-box1'>
              <span className='first-content-box1-head' />
              <div className='first-content-box1-cube'>
                <Link to='#'>
                  <span>
                    <MdPlace className='cube-icon' />
                  </span>
                  <p> Danh sách bưu cục</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='first-content-search'>
            <Input placeholder='Nhập mã vận đơn' size='large' />
            <Button size='large' style={{ width: 120 }}>
              Tra cứu
            </Button>
          </div>
        </div>
      </div>
      <div className='second-content'>
        <div className='second-content-align'>
          <div className='second-content-service'>
            <Link className='second-content-service-item'>
              <img src={service1} alt='Service icon' className='service-icon' />
              <p>Chuyển phát hỏa tốc</p>
            </Link>
            <Link className='second-content-service-item'>
              <img src={service2} alt='Service icon' className='service-icon' />
              <p>Chuyển phát nhanh</p>
            </Link>
            <Link className='second-content-service-item'>
              <img src={service3} alt='Service icon' className='service-icon' />
              <p>Chuyển phát tiết kiệm (MES)</p>
            </Link>
            <Link className='second-content-service-item'>
              <img src={service4} alt='Service icon' className='service-icon' />
              <p>Chuyển phát đường bộ</p>
            </Link>
            <Link className='second-content-service-item'>
              <img src={service5} alt='Service icon' className='service-icon' />
              <p>Chuyển phát thu hộ (COD)</p>
            </Link>
            <Link className='second-content-service-item'>
              <img src={service6} alt='Service icon' className='service-icon' />
              <p>Chuyển phát quốc tế</p>
            </Link>
            <Link className='second-content-service-item'>
              <img src={service7} alt='Service icon' className='service-icon' />
              <p>Thuê xe nguyên chuyến</p>
            </Link>
            <Link className='second-content-service-item'>
              <img src={service8} alt='Service icon' className='service-icon' />
              <p>3PL & Fulfillment</p>
            </Link>
          </div>
          <div className='service2'>
            <SlArrowUp style={{ width: '24px', height: 'auto' }} />
            <p>
              <b>Lựa chọn dịch vụ</b> bạn quan tâm
            </p>
          </div>
          <img
            src={warehousebanner}
            alt='Warehouse banner'
            className='service-banner'
          />
        </div>
      </div>
    </div>
  );
};

export default GuestHome;
