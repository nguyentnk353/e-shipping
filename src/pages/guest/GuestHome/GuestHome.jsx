import { Button, Input } from 'antd';
import React from 'react';
import { AiFillCaretRight, AiOutlineFileSearch } from 'react-icons/ai';
import { MdPlace, MdPostAdd } from 'react-icons/md';
import { SlArrowUp } from 'react-icons/sl';
import { RiArrowRightSFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import service1 from '../../../assets/images/plan-fast.png';
import service2 from '../../../assets/images/fast-delivery.png';
import service3 from '../../../assets/images/logistics.png';
import service4 from '../../../assets/images/normal-delivery.png';
import service5 from '../../../assets/images/save-money.png';
import service6 from '../../../assets/images/global.png';
import service7 from '../../../assets/images/hired-truck.png';
import service8 from '../../../assets/images/warehouse.png';
import warehousebanner from '../../../assets/images/banner-logistics.png';
import thirdServiceLeft1 from '../../../assets/images/cost-white.png';
import thirdServiceLeft2 from '../../../assets/images/get-money.png';
import thirdServiceLeft3 from '../../../assets/images/location-white.png';
import thirdServiceRight1 from '../../../assets/images/van.png';
import thirdServiceRight2 from '../../../assets/images/delivery-box.png';
import thirdServiceRight3 from '../../../assets/images/moving-box.png';
import thirdServiceRight4 from '../../../assets/images/shield.png';
import thirdServiceRight5 from '../../../assets/images/support.png';
import './GuestHome.less';

const GuestHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='first-content'>
        <div className='first-content-align'>
          <h1>Hơn cả một dịch vụ</h1>
          <div className='first-content-box-row'>
            <div className='first-content-box1'>
              <span className='first-content-box1-head'></span>
              <div className='first-content-box1-cube'>
                <Link to='/check-charge'>
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
      <div className='third-content'>
        <div className='third-content-left'>
          <div className='third-content-left-align'>
            <h1>
              Tại sao nên lựa chọn <span>E-shipping?</span>
            </h1>
            <p>
              Chúng tôi cung cấp đa dạng các giải pháp logistics tối ưu khắp 63
              tỉnh thành, đáp ứng mọi nhu cầu của Đối tác Doanh nghiệp & Khách
              hàng Cá nhân như dịch vụ Chuyển phát Nhanh, Chuyển phát Quốc tế,
              Chuyển phát Thu hộ (COD), Cho thuê Kho bãi, Hoàn thiện đơn hàng...
              với văn hóa phục vụ Thân thiện - Nhiệt tình - Tận tâm.
            </p>
            <div className='third-content-left-row'>
              <div className='third-content-left-row-service'>
                <img
                  src={thirdServiceLeft1}
                  alt='service icon'
                  className='service-icon-left1'
                />
                <h5>Hoàn tiền COD chỉ trong 24h</h5>
              </div>
              <div className='third-content-left-row-service'>
                <img
                  src={thirdServiceLeft2}
                  alt='service icon'
                  className='service-icon-left2'
                />
                <h5>Miễn cước thu hộ lên đến 5 triệu đồng</h5>
              </div>
              <div className='third-content-left-row-service'>
                <img
                  src={thirdServiceLeft3}
                  alt='service icon'
                  className='service-icon-left3'
                />
                <h5>Mạng lưới phủ sóng 63 tỉnh thành</h5>
              </div>
            </div>
            <button className='third-content-left-button'>
              Gửi hàng ngay
              <AiFillCaretRight
                style={{ verticalAlign: 'middle', marginLeft: '10px' }}
              />
            </button>
          </div>
        </div>
        <div className='third-content-right'>
          <div className='third-content-right-align'>
            <div className='third-content-right-service'>
              <div className='service-icon-right-bg'>
                <img
                  src={thirdServiceRight1}
                  alt='Service icon'
                  className='service-icon-right'
                />
              </div>
              <h3>
                <b>Giao hàng hỏa tốc</b> <br />
                Vận chuyển hàng nội thành siêu nhanh chỉ trong 3 tiếng
                <br />
                Gửi liên tỉnh nhận liền ngay sau 12 - 24 tiếng
              </h3>
            </div>
            <div className='third-content-right-service'>
              <div className='service-icon-right-bg'>
                <img
                  src={thirdServiceRight2}
                  alt='Service icon'
                  className='service-icon-right'
                />
              </div>
              <h3>
                <b>Kiểm soát thời gian thực</b> <br />
                Khách hàng luôn nắm rõ vị trí kiện hàng đang ở đâu, thông tin
                người vận chuyển và thời gian hàng được giao đến
              </h3>
            </div>
            <div className='third-content-right-service'>
              <div className='service-icon-right-bg'>
                <img
                  src={thirdServiceRight3}
                  alt='Service icon'
                  className='service-icon-right'
                />
              </div>
              <h3>
                <b>Cơ sở vật chất hiện đại</b> <br />
                Hệ thống kho bãi rộng rãi, xe tải 100% đóng thùng kín
                <br />
                Mạng lưới 400 bưu cục và điểm nhận trả hàng phủ sóng toàn quốc
              </h3>
            </div>
            <div className='third-content-right-service'>
              <div className='service-icon-right-bg'>
                <img
                  src={thirdServiceRight4}
                  alt='Service icon'
                  className='service-icon-right'
                />
              </div>
              <h3>
                <b>Đảm bảo an toàn</b> <br />
                Hàng hóa sẽ luôn được đảm bảo kỹ lưỡng và an toàn với các dịch
                vụ chuyển phát chuyên nghiệp
              </h3>
            </div>
            <div className='third-content-right-service'>
              <div className='service-icon-right-bg'>
                <img
                  src={thirdServiceRight5}
                  alt='Service icon'
                  className='service-icon-right'
                />
              </div>
              <h3>
                <b>Hỗ trợ trực tuyến</b> <br />
                Thời gian hỗ trợ từ 6:00 - 22:00 (thứ 2 - thứ 7) và từ 7:00 -
                20:00 (chủ nhật & các ngày lễ)
                <br />
                Phục vụ và giải đáp mọi thắc mắc của Khách hàng
                <br />
                Liên hệ với chúng tôi qua: Hotline, Facebook Messenger, Website
                Live Chat, Zalo Chat hoặc Email
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestHome;
