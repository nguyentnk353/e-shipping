import React from 'react';
import { Select } from 'antd';
import { Card, List } from 'antd';
import './GuestCheckCharges.less';
import { InputNumber, Space } from 'antd';
import anhBus from '../../../assets/images/dt.png';
import data from '../../../mocks/mockData.json'
import drug from '../../../assets/images/drugs.png';
import doc from '../../../assets/images/file.png';
import fish from '../../../assets/images/fish.png';
import water from '../../../assets/images/water.png';
import etc from '../../../assets/images/more.png';
import cloth from '../../../assets/images/clothes-rack.png';
import { AiOutlineFileSearch } from 'react-icons/ai';


const { Option } = Select;

function GuestCheckCharges() {

  const data = [
    {
      title: 'Tài liệu',
      icon: doc
    },
    {
      title: 'Thời trang',
      icon: cloth
    },
    {
      title: 'Đồ điện tử',
      icon: anhBus
    },
    {
      title: 'Dược phẩm',
      icon: drug
    },
    {
      title: 'Chất bột nước',
      icon: water
    },
    {
      title: 'Đồ tươi sống',
      icon: fish
    },
    {
      title: 'Khác',
      icon: etc
    },
  ];

  return (
    <div className='check-charge-all'>
      <div className='guest-check-charge'>
        <div className='guest-check-charge-title'>Tra cước và thời gian vận chuyển</div>

        <div className='form-check-charge'>
          <h1>Nhập thông tin bưu kiện</h1>
          <div>
            <h2>Nơi gửi
              <sup className='require-symbol'>*</sup>
            </h2>
            <Select
              showSearch
              placeholder="Chọn tỉnh thành"
              size='large'
              style={{
                margin: '20px',
                width: 350,
                borderRadius: '5px'
              }}
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              options={data.Provices}
            >
            </Select>
            <Select
              showSearch
              placeholder="Chọn quận huyện"
              size='large'
              style={{
                margin: '20px',
                width: 350,
                borderRadius: '5px'
              }}
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              options={data.Provices}
            >
            </Select>
            <div></div>
          </div>

          <div>
            <h2>Nơi nhận
              <sup className='require-symbol'>*</sup>
            </h2>
            <Select
              showSearch
              placeholder="Chọn tỉnh thành"
              size='large'
              style={{
                margin: '20px',
                width: 350,
                borderRadius: '5px'
              }}
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              options={data.Provices}
            >
            </Select>
            <Select
              showSearch
              placeholder="Chọn quận huyện"
              size='large'
              style={{
                margin: '20px',
                width: 350,
                borderRadius: '5px'
              }}
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              options={data.Provices}
            >
            </Select>
            <div></div>
          </div>

          <div className='kilogram'>
            <div>
              <h2>Số kiện
                <sup className='require-symbol'>*</sup>
                <Space>
                  <InputNumber size="large" min={1} max={100000} defaultValue={1} style={{
                    width: '150px',
                    margin: '20px 0px 20px 20px',
                    borderRadius: '5px'
                  }} />
                </Space>
              </h2>

            </div>

            <div>
              <h2>Trọng lượng
                <sup className='require-symbol'>*</sup>
                <Space>
                  <InputNumber size="large" min={1} max={100000} defaultValue={1} style={{
                    width: '150px',
                    margin: '20px 0px 20px 20px',
                    borderRadius: '5px'
                  }} />
                  KG
                </Space>

              </h2>
            </div>

            <div>
              <h2>Số tiền thu hộ
                <Space>
                  <InputNumber size="large" min={0} max={100000} defaultValue={0} style={{
                    width: '200px',
                    margin: '20px 0px 20px 20px',
                    borderRadius: '5px'
                  }} />
                  VND
                </Space>
              </h2>
            </div>
          </div>

          <h1>Đặc tính hàng hóa</h1>

          <div>
            <List
              grid={{
                gutter: 0,
                column: 7,
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card title={item.title} style={{
                    textAlign: 'center'
                  }}><img src={item.icon} alt="" width="50" height="50" /></Card>
                </List.Item>
              )}
            />
          </div>

          <button className='btn-tra-cuoc'>Tra cước</button>
        </div>
      </div>

      <div>
        <section className="pb-4 pb-md-5" id="results">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-12 col-12 offset-md-1 mt-3">
                <div className="w-100 bg-white">
                  <div className="font-bold font-24px text-center mb-4">Thông tin cước vận chuyển</div>
                  <div className="w-100 box-kqorder p-3">
                    <div className="row" style={{ position: 'relative' }}>
                      <div className="spinner-border text-primary" style={{ display: 'none', position: 'absolute', zIndex: 1, top: '46%', left: '48%' }} />
                      <ul className="col-lg-6 col-md-6 col-sm-6 col-12 pr-md-4 ul-kqbc font-size-16">
                        <li className="d-flex justify-content-between align-items-center">
                          <div className="font-bold font-size-18">CPN</div>
                          <div>
                            <a onclick="create_order_from_web()" className="btn d-flex align-items-center"><AiOutlineFileSearch /> Tạo vận đơn</a>
                          </div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <div>Cước chính ( VNĐ ):</div>
                          <div>54.756</div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <div>Phí COD ( VNĐ ):</div>
                          <div>0</div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <div>Thời gian toàn trình dự kiến :</div>
                          <div>24h</div>
                        </li>
                      </ul>
                      <ul className="col-lg-6 col-md-6 col-sm-6 col-12 pl-md-4 ul-kqbc font-size-16">
                        <li className="d-flex justify-content-between align-items-center">
                          <div className="font-bold font-size-18">Đường bộ</div>
                          <div>
                            <a onclick="create_order_from_web()" className="btn d-flex align-items-center"><AiOutlineFileSearch /> Tạo vận đơn</a>
                          </div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <div>Cước chính ( VNĐ ):</div>
                          <div>33.696</div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <div>Phí COD ( VNĐ ):</div>
                          <div>0</div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <div>Thời gian toàn trình dự kiến :</div>
                          <div>48h</div>
                        </li>
                      </ul>
                      <ul className="col-lg-6 col-md-6 col-sm-6 col-12 mt-3 mt-md-5 pr-md-4 ul-kqbc font-size-16">
                        <li className="d-flex justify-content-between align-items-center">
                          <div className="font-bold font-size-18">Tiết kiệm</div>
                          <div>
                            <a onclick="create_order_from_web()" className="btn d-flex align-items-center"><AiOutlineFileSearch /> Tạo vận đơn</a>
                          </div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <div>Cước chính ( VNĐ ):</div>
                          <div>40.716</div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <div>Phí COD ( VNĐ ):</div>
                          <div>0</div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <div>Thời gian toàn trình dự kiến :</div>
                          <div>56h</div>
                        </li>
                      </ul>
                      <ul className="col-lg-6 col-md-6 col-sm-6 col-12 mt-3 mt-md-5 pr-md-4 ul-kqbc font-size-16">
                        <li className="d-flex justify-content-between align-items-center">
                          <div className="font-bold font-size-18">Hỏa tốc</div>
                          <div>
                            <a onclick="create_order_from_web()" className="btn d-flex align-items-center"><AiOutlineFileSearch /> Tạo vận đơn</a>
                          </div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <div>Cước chính ( VNĐ ):</div>
                          <div>103.896</div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <div>Phí COD ( VNĐ ):</div>
                          <div>0</div>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <div>Thời gian toàn trình dự kiến :</div>
                          <div>18h</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default GuestCheckCharges