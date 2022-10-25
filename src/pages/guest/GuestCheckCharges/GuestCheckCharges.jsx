import React from 'react';
import { Select } from 'antd';
import { Card, List } from 'antd';
import './GuestCheckCharges.css';
import { InputNumber, Space } from 'antd';
import anhBus from '../../../assets/images/dt.png';
import data from '../../../mocks/mockData.json'

const { Option } = Select;

function GuestCheckCharges() {

  const data = [
    {
      title: 'Tài liệu',
    },
    {
      title: 'Thời trang',
    },
    {
      title: 'Đồ điện tử',
    },
    {
      title: 'Đồ tươi sống',
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
                <sup className='require-symbol'>*</sup>
                <Space>
                  <InputNumber size="large" min={1} max={100000} defaultValue={1} style={{
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
                gutter: 16,
                column: 4,
              }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card title={item.title}><img src={anhBus} alt="" width="50" height="50"/></Card>
                </List.Item>
              )}
            />
          </div>
          
          <button className='btn-tra-cuoc'>Tra cước</button>
        </div>

        <div className='footer-check-charges'>
          <div className='guest-check-charge-title-2'>HOTLINE: 1900 00 0091</div>
          <h2 style={{color: "white"}}>Liên hệ ngay để được tư vấn chi tiết và có giá dịch vụ tốt nhất</h2>
          <h1 style={{color: "#FCD804"}}>Lấy hàng tận nơi - Giao hàng tận tay - Phục vụ tận tâm</h1>
          <div>
            <button className='btn-check-charges-2'>Tìm bưu cục gần bạn</button>
            <button className='btn-check-charges-3'>Tra cứu giá cước</button>
              
          </div>
        </div>
      </div>
    </div>  
  )
}

export default GuestCheckCharges