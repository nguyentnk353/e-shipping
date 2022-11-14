import { Line } from '@ant-design/plots';
import React, { useState } from 'react';
import Right from '../../../assets/images/UserOverviewRight2.png';
import LogoutFunction from '../../../components/LogoutFunction/LogoutFunction';
import mockData from '../../../mocks/UserOverview.json';
// import { Logout } from '../../../components/LogoutFunction/LogoutFunction';
import {
    CaretDownFilled
} from '@ant-design/icons';
import { useMount } from 'ahooks';
import { Col, DatePicker, Input, Row, Select } from 'antd';
import "antd/dist/antd.css";
import moment from "moment";
import { getAllBillOneUser } from './../../../services/getAllBillOneUser';
import './UserHome2.less';


const UserHome2 = () => {
    const logout = LogoutFunction();
    const dropIcon = <CaretDownFilled />;
    const data = mockData.data;
    const [getParams, setGetParams] = useState({
        items: [],
        totalRecord: 1
      });

    useMount(() => {
        getAllBillOneUser({
            PageIndex: 1,
            PageSize: 4,
            userId: user.Id,
          })
        .then((data) => {
            setGetParams(data);
        })
        .catch((err) => console.log(err));
      });
    
    const user = JSON.parse(localStorage.getItem('loginUser'));
    const { Search } = Input;
    const { RangePicker } = DatePicker;
    const dateFormat = "DD/MM/YYYY";
    const config = {
        data,
        xField: 'year',
        yField: 'Tổng chi',
        label: {},
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [
            {
                type: 'marker-active',
            },
        ],
    };

    const onSearch = (value) => console.log(value);

    return (
        <div className='page-user-overview'>

            <div className='left-user-overview02'>

                <div className='title-userhome-02'>
                    <Search placeholder="Mã đơn vận"
                        onSearch={onSearch} enterButton
                        className='search-user-home'
                        size='large'
                    />
                    <Select
                        defaultValue={{
                            value: 'Tất cả',
                            label: 'Tất cả',
                        }}
                        suffixIcon={dropIcon}
                        size='large'
                        className='select-user-home'
                        optionFilterProp='children'
                        filterOption={(input, option) =>
                            (option?.label ?? '')
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        }
                        options={[{
                            value: 'Tất cả',
                            label: 'Tất cả',
                        }]}
                    >
                    </Select>
                    <RangePicker
                        className='RangePicker-user-home'
                        defaultValue={[
                            moment("01/06/2022", dateFormat),
                            moment("16/11/2022", dateFormat)
                        ]}
                        format={dateFormat}
                    />

                </div>
                <div className='user-home-card'>
                    <div className='us-card-1-3'>
                        <Row>
                            <Col span={7}>Tổng đơn</Col>
                            <span className='line-user-home'></span>
                            <Col span={8}>Đã hoàn thành</Col>
                            <span className='line-user-home'></span>
                            <Col span={8}>Đang vận chuyển</Col>
                        </Row>
                        <Row className='user-home-content-card'>
                            <Col span={7}>{getParams.totalRecord}</Col>
                            <span className='line-user-home'></span>
                            <Col span={8}>7</Col>
                            <span className='line-user-home'></span>
                            <Col span={8}>0</Col>
                        </Row>
                    </div>
                    <div className='us-card c4'>
                        <div>Tiền đã TT</div>
                        <div className='user-home-content-card-4-5'>0</div>
                    </div>
                    <div className='us-card c5'>
                        <div>Tiền chưa TT</div>
                        <div className='user-home-content-card-4-5'>0</div>
                    </div>
                </div>
                <div className='user-overview-chart'>
                    <Line {...config} />
                </div>
            </div>

            <div>
                <img
                    src={Right}
                    alt='ahihi'
                    className='image-right-user-overview'
                />
            </div>
        </div>
    )
};

export default UserHome2;
