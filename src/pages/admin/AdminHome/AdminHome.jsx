import React from 'react';
import {
  Button,
  Input,
  Modal,
  Space,
  Table,
  Tag,
  Row,
  Col,
  notification,
} from 'antd';
import './AdminHome.less';
import { useMount } from 'ahooks';
import { managerGetBillByID } from '../../../services/managerGetBillByID';
import { useState, useEffect } from 'react';
import { deleteBill } from '../../../services/deleteBill';
import { managerUpdateBill } from '../../../services/managerUpdateBill';
import { getAllEmployee } from '../../../services/getAllEmployee';

const { Search } = Input;

const AdminHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({});
  const [bill, setbill] = useState({});
  const [param, setParam] = useState({
    PageIndex: 1,
    PageSize: 5,
  });
  const [tableData, setTableData] = useState([]);
  const [tableTotal, setTableTotal] = useState(0);
  const onSearch = (value) => {
    if (value === '') {
      setParam({ ...param, billid: 'empty' });
    } else {
      setParam({ ...param, billid: value });
    }
  };
  useEffect(() => {
    getAllEmployee(param)
      .then((data) => {
        setTableData(data);
        // setTableTotal(data.totalRecord);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [param]);


  console.log(tableData);
  // useMount(() => {
  //   getAllEmployee()
  //   .then((data) => {
  //       setUser(data);
  //   })
  //   .catch((err) => console.log(err));
  // })

  const columns = [
    // {
    //   title: 'UserID',
    //   //   width: '15%',
    //   dataIndex: 'userId',
    //   key: 'userId',
    //   fixed: 'left',
    // },
    {
      title: 'FullName',

      dataIndex: 'fullName',
      key: '1',
    },
    {
      title: 'Address',

      dataIndex: 'address',
      key: '2',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: '3',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: '4',
    },

    {
      title: 'Department Name',
      dataIndex: 'departmentName',
      key: '5',
    },
    {
      title: 'Thao tác',
      key: 'operation',
      fixed: 'right',
      width: 180,
      render: (v, data) => (
        <Space size='small'>
          <Button type='link' onClick={() => updateBillData(data)}>
            Update
          </Button>
          <Button type='link' onClick={() => deleteBillData(data)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  function updateBillData(bill) {
    setIsModalOpen(true);
    setbill(bill);
  }

  function deleteBillData(data) {
    deleteBill(data)
      .then((data) => {
        notification.open({
          message: 'Cập nhập bill thành công',
        });
      })
      .catch((error) => {
        notification.open({
          message: 'Cập nhập bill không thành công',
          description: error,
        });
      });
    setParam({ ...param, PageIndex: 1, PageSize: 5 });
  }
  const handleOk = () => {
    managerUpdateBill(bill)
      .then((data) => {
        notification.open({
          message: 'Cập nhập bill thành công',
        });
      })
      .catch((error) => {
        notification.open({
          message: 'Cập nhập bill không thành công',
          description: error,
        });
      });
    setIsModalOpen(false);
    setParam({ ...param, PageIndex: 1, PageSize: 5 });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='manager-background'>
      <div className='manager-align'>
        <div className='head-card'>
          <Search
            placeholder='Tra cứu vận đơn'
            onSearch={onSearch}
            enterButton
            style={{ width: '250px' }}
            size='large'
          />
        </div>
        <div className='table-align'>
          <Table
            columns={columns}
            dataSource={tableData}
            scroll={{
              x: 1300,
            }}
            pagination={{
              total: tableTotal,
              pageSize: 5,
              hideOnSinglePage: true,
              onChange: (page, pageSize) => {
                setParam({ ...param, PageIndex: page, PageSize: pageSize });
              },
            }}
          />
          <Modal
            title='Cập nhập thông tin tài khoản'
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Row>
              <Col span={12}>
                {/* <b>UserID</b>
                <Input defaultValue={user.userId} disabled /> */}
                <b>Login Name</b>
                <Input
                  defaultValue={user.loginName}
                  onChange={(e) => {
                    setUser({ ...user, loginName: e.target.value });
                  }}
                />
                <b>Password</b>
                <Input
                  defaultValue={user.password}
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
                <b>Full Name</b>
                <Input
                  defaultValue={user.fullName}
                  onChange={(e) => {
                    setUser({ ...user, fullName: e.target.value });
                  }}
                />
                <b>Address</b>
                <Input
                  defaultValue={user.address}
                  onChange={(e) => {
                    setUser({ ...user, address: e.target.value });
                  }}
                />
              </Col>
              <Col span={12}>
                <b>Mã khách hàng</b>
                <Input
                  defaultValue={user.userId}
                  onChange={(e) => {
                    setUser({ ...user, userId: e.target.value });
                  }}
                />
                <b>Mã nơi gửi</b>
                <Input
                  defaultValue={user.startDepartmentId}
                  onChange={(e) => {
                    setUser({ ...user, startDepartmentId: e.target.value });
                  }}
                />
                <b>Mã nơi nhận</b>
                <Input
                  defaultValue={user.destinationDepartmentId}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      destinationDepartmentId: e.target.value,
                    });
                  }}
                />
                <b>Địa chỉ nơi nhận</b>
                <Input
                  defaultValue={user.address}
                  onChange={(e) => {
                    setUser({ ...user, address: e.target.value });
                  }}
                />
                <b>Trạng thái</b>
                <Input
                  defaultValue={user.status}
                  onChange={(e) => {
                    setUser({ ...user, status: e.target.value });
                  }}
                />
              </Col>
            </Row>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
