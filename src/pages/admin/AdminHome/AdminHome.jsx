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
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useState, useEffect } from 'react';
import { getAllEmployee } from '../../../services/getAllEmployee';
import { adminUpdateUser } from '../../../services/adminUpdateUser';
import { adminDeleteUser } from '../../../services/adminDeleteUser';

const { Search } = Input;

const AdminHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({});
  const [param, setParam] = useState({
    PageIndex: 1,
    PageSize: 10,
  });
  const [tableData, setTableData] = useState([]);
  const [tableTotal, setTableTotal] = useState(0);
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

  const statusArray = [
    {
      value: 1,
      label: 'Active'
    },
    {
      value: 2,
      label: 'InActive'
    },
  ]

  const columns = [
    {
      title: 'EmployeeID',
      //   width: '15%',
      dataIndex: 'employeeId',
      key: 'employeeId',
      fixed: 'left',
    },
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
      title: 'DepartmentID',
      dataIndex: 'departmentId',
      key: '5',
    },
    {
      title: 'Department Name',
      dataIndex: 'departmentName',
      key: '6',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'statusId',
      key: '7',
      render: (data) => {
        console.log(data)
        switch (data) {
          case 1:
            return (
              <Tag color='green' key={data}>
                Active
              </Tag>
            );
          case 0:
            return (
              <Tag color='red' key={data}>
                InActive
              </Tag>
            );
          default:
            return (
              <Tag color='magenta' key={data}>
                Trạng thái không xác định
              </Tag>
            );
        }
      },
    },
    {
      title: 'Thao tác',
      key: 'operation',
      fixed: 'right',
      width: 180,
      render: (v, data) => (
        <Space size='small'>
          <Button type='link' onClick={() => updateUserData(data)}>
            Update
          </Button>
          <Button type='link' onClick={() => deleteUserData(data)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  function updateUserData(user) {
    setIsModalOpen(true);
    setUser(user);
  }

  function deleteUserData(data) {
    adminDeleteUser(data)
      .then((data) => {
        notification.open({
          message: 'Cập nhập User thành công',
        });
      })
      .catch((error) => {
        notification.open({
          message: 'Cập nhập User không thành công',
          description: error,
        });
      });
    setParam({ ...param, PageIndex: 1, PageSize: 8 });
  }
  const handleOk = () => {
    adminUpdateUser(user)
      .then((data) => {
        notification.open({
          message: 'Cập nhập user thành công',
          icon: <CheckOutlined style={{ color: '#108ee9' }} />
        });
      })
      .catch((error) => {
        notification.open({
          message: 'Cập nhập user không thành công',
          description: error,
          icon: <CloseOutlined style={{ color: '#108ee9' }} />
        });
      });
    setIsModalOpen(false);
    setParam({ ...param, PageIndex: 1, PageSize: 8 });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='admin-background'>
      <div className='admin-align'>
        <div className='table-align'>
          <Table
            columns={columns}
            dataSource={tableData}
            scroll={{
              x: 1300,
            }}
            pagination={{
              total: 16,
              pageSize: 8,
              // hideOnSinglePage: true,
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
                <b>EmployeeId</b>
                <Input defaultValue={user.employeeId} disabled />
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
                <b>Email</b>
                <Input
                  defaultValue={user.email}
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
                <b>Phone</b>
                <Input
                  defaultValue={user.phone}
                  onChange={(e) => {
                    setUser({ ...user, phone: e.target.value });
                  }}
                />
                <b>DepartmentId</b>
                <Input
                  defaultValue={user.departmentId}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      departmentId: e.target.value,
                    });
                  }}
                />
                <b>Trạng thái</b>
                <Input
                  defaultValue={user.statusId}
                  onChange={(e) => {
                    setUser({ ...user, statusId: e.target.value });
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
