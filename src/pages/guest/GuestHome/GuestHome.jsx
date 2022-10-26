import { Button, Input } from 'antd';
import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdPlace, MdPostAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
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
      <div className='second-content'></div>
    </div>
  );
};

export default GuestHome;
