import React from 'react';
import { Select } from 'antd';
import { Card, List } from 'antd';
import './GuestCheckCharges.css';
import { InputNumber, Space } from 'antd';
import anhBus from '../../../assets/images/dt.png';
import data from '../../../mocks/mockData.json'
import drug from '../../../assets/images/drugs.png';
import doc from '../../../assets/images/file.png';
import fish from '../../../assets/images/fish.png';
import water from '../../../assets/images/water.png';
import etc from '../../../assets/images/more.png';
import cloth from '../../../assets/images/clothes-rack.png';


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
                  }}><img src={item.icon} alt="" width="50" height="50"/></Card>
                </List.Item>
              )}
            />
          </div>
          
          <button className='btn-tra-cuoc'>Tra cước</button>
        </div>
      </div>
    </div>  
  )
}

export default GuestCheckCharges