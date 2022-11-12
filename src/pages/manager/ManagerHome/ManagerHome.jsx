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
import './ManagerHome.less';
import { useMount } from 'ahooks';
import { managerGetBillByID } from '../../../services/managerGetBillByID';
import { useState, useEffect } from 'react';
import { updateBill } from './../../../services/updateBill';
import { deleteBill } from '../../../services/deleteBill';

const { Search } = Input;

const ManagerHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bill, setbill] = useState({});
  const [param, setParam] = useState({
    PageIndex: 1,
    PageSize: 5,
    billid: 'empty',
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
    managerGetBillByID(param)
      .then((data) => {
        setTableData(data.items);
        setTableTotal(data.totalRecord);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [param]);

  const columns = [
    {
      title: 'Mã đơn hàng',
      //   width: '15%',
      dataIndex: 'billId',
      key: 'billId',
      fixed: 'left',
    },
    {
      title: 'Nơi gửi',
      width: '13%',
      dataIndex: 'startDepartmentAddress',
      key: '1',
    },
    {
      title: 'Nơi nhận',
      width: '13%',
      dataIndex: 'destinationDepartmentAddress',
      key: '2',
    },
    {
      title: 'Đia chỉ nơi nhận',
      width: '12%',
      dataIndex: 'address',
      key: '3',
    },
    {
      title: 'Chi phí',
      dataIndex: 'price',
      key: '4',
    },

    {
      title: 'Thông tin hàng hóa',
      width: '15%',
      dataIndex: 'description',
      key: '5',
    },
    {
      title: 'Loại hàng hóa',
      dataIndex: 'categoryName',
      key: '6',
    },
    {
      title: 'Cân nặng',
      dataIndex: 'weight',
      key: '8',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: '9',
      render: (_, { status }) => {
        let color = 'geekblue';
        if (status === 'Inactive') {
          color = 'volcano';
        } else color = 'green';
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
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
    updateBill(bill)
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
            title='Cập nhập thông tin đơn hàng'
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Row>
              <Col span={12}>
                <b>Mã đơn</b>
                <Input defaultValue={bill.billId} disabled />
                <b>Mô tả</b>
                <Input
                  defaultValue={bill.description}
                  onChange={(e) => {
                    setbill({ ...bill, description: e.target.value });
                  }}
                />
                <b>Mã loại hàng</b>
                <Input
                  defaultValue={bill.categoryId}
                  onChange={(e) => {
                    setbill({ ...bill, categoryId: e.target.value });
                  }}
                />
                <b>Khối lượng</b>
                <Input
                  defaultValue={bill.weight}
                  onChange={(e) => {
                    setbill({ ...bill, weight: e.target.value });
                  }}
                />
                <b>Chi phí</b>
                <Input
                  defaultValue={bill.price}
                  onChange={(e) => {
                    setbill({ ...bill, price: e.target.value });
                  }}
                />
              </Col>
              <Col span={12}>
                <b>Mã khách hàng</b>
                <Input
                  defaultValue={bill.userId}
                  onChange={(e) => {
                    setbill({ ...bill, userId: e.target.value });
                  }}
                />
                <b>Mã nơi gửi</b>
                <Input
                  defaultValue={bill.startDepartmentId}
                  onChange={(e) => {
                    setbill({ ...bill, startDepartmentId: e.target.value });
                  }}
                />
                <b>Mã nơi nhận</b>
                <Input
                  defaultValue={bill.destinationDepartmentId}
                  onChange={(e) => {
                    setbill({
                      ...bill,
                      destinationDepartmentId: e.target.value,
                    });
                  }}
                />
                <b>Địa chỉ nơi nhận</b>
                <Input
                  defaultValue={bill.address}
                  onChange={(e) => {
                    setbill({ ...bill, address: e.target.value });
                  }}
                />
                <b>Trạng thái</b>
                <Input
                  defaultValue={bill.status}
                  onChange={(e) => {
                    setbill({ ...bill, status: e.target.value });
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

export default ManagerHome;
