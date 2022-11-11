import {
    CaretDownFilled
} from '@ant-design/icons';
import { Select } from 'antd';
import React, { useState } from 'react';
import './UserStatisticBill.less';
import "antd/dist/antd.css";
import { DatePicker, Space, Table } from "antd";
import moment from "moment";
import mockData from '../../../mocks/UserStaticstic.json';


function UserStatisticBill() {
    const dropIcon = <CaretDownFilled />;
    const data = mockData.items;

    const { RangePicker } = DatePicker;
    const dateFormat = "DD/MM/YYYY";

    const columns = [
        {
            title: "Mã đơn vận",
            width: 250,
            dataIndex: "billId",
            key: "Mã đơn vận",
            fixed: "left"
        },
        {
            title: "Người gửi",
            dataIndex: "nameSender",
            key: "1"
        },
        {
            title: "Người nhận",
            dataIndex: "nameReceiver",
            key: "2"
        },
        {
            title: "Loại hàng hóa",
            dataIndex: "categoryName",
            key: "3"
        },
        {
            title: "Bưu cục gửi",
            dataIndex: "startDepartmentAddress",
            key: "4"
        },
        {
            title: "Bưu cục nhận",
            dataIndex: "destinationDepartmentAddress",
            key: "5"
        },
        {
            title: "Nơi nhận hàng khác",
            dataIndex: "address",
            key: "6"
        },
        {
            title: "Phí (VNĐ)",
            dataIndex: "price",
            width: 100,
            key: "7"
        },
        {
            title: "Khối lượng(Kg)",
            dataIndex: "weight",
            width: 100,
            key: "8"
        }
    ];

    const [tableParams, setTableParams] = useState({
        pagination: {
          current: 1,
          pageSize: 4,
          total: 7
        },
      });

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
          pagination,
          filters,
          ...sorter,
        });
      };

    return (
        <div className='page-statistic-bill'>
            <div className='title-statistic-bill'>
                <Select
                    defaultValue={{
                        value: 'Tất cả',
                        label: 'Tất cả',
                    }}
                    suffixIcon={dropIcon}
                    size='large'
                    style={{
                        width: '285px',
                        textAlign: 'left',
                        fontSize: '14px',
                        marginRight: '20px',
                        border: '1px solid',
                        borderRadius: '3px',
                    }}
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
                ></Select>
                <Space direction="vertical" size={12}>
                    <RangePicker
                        className='RangePicker'
                        style={{
                            border: '1px solid'
                        }}
                        defaultValue={[
                            moment("2022/06/01", dateFormat),
                            moment("2022/11/12", dateFormat)
                        ]}
                        format={dateFormat}
                    />
                </Space>
            </div>
            <div className='table-page-statistic-bill'>
                <Table
                    pagination={tableParams.pagination}
                    onChange={handleTableChange}
                    columns={columns}
                    dataSource={data}
                    scroll={{
                        x: 2000
                
                    }}
                />
            </div>
        </div>
    )
}

export default UserStatisticBill