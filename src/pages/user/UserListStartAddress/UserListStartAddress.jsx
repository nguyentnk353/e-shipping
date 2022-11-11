import { Table } from 'antd';
import React from 'react';
import mockData from '../../../mocks/UserListAddress.json';
import './UserListStartAddress.less';


function UserListStartAddress() {
    const  data = mockData.address;
    const columns = [
        {
          title: 'STT',
          dataIndex: 'departmentId',
          key: 'STT',
        },
        {
          title: 'Tỉnh thành',
          dataIndex: 'provinceName',
          key: 'Tỉnh thành',
        },
        {
          title: 'Địa chỉ',
          dataIndex: 'address',
          key: 'Địa chỉ',
        },
        
      ];
    return (
        <div className='page-start-address'>
            <div className='start-address-title'>Danh sách bưu cục</div>

            <div className='table-list-address'>
                <Table columns={columns} dataSource={data}/>
            </div>
        </div>
    )
}

export default UserListStartAddress