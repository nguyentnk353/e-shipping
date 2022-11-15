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
  Form,
  Select,
} from 'antd';
import './ManagerHome.less';
import { useMount } from 'ahooks';
import { managerGetBillByID } from '../../../services/managerGetBillByID';
import { useState, useEffect } from 'react';
import { deleteBill } from '../../../services/deleteBill';
import { managerUpdateBill } from '../../../services/managerUpdateBill';
import { AiOutlinePlus } from 'react-icons/ai';
import { getAllCategories } from './../../../services/getAllCategories';
import { getAllProvice } from './../../../services/getAllProvice';

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
  const [category, setCategory] = useState([]);
  const [province, setProvince] = useState([]);
  const statusArray = [
    {
      value: 'Active',
      label: 'Chưa nhận hàng',
    },
    {
      value: 'Ongoing',
      label: 'Đang giao hàng',
    },
    {
      value: 'Pending',
      label: 'Tồn kho',
    },
    {
      value: 'Success',
      label: 'Đã giao thành công',
    },
    {
      value: 'Unsuccess',
      label: 'Đã giao không thành công',
    },
    {
      value: 'Inactive',
      label: 'Đã hủy',
    },
  ];
  const [form] = Form.useForm();
  if (isModalOpen == false) {
    form.resetFields();
  }
  function onSearch(value) {
    if (value === '') {
      setParam({ ...param, billid: 'empty' });
    } else {
      setParam({ ...param, billid: value });
    }
  }
  useEffect(() => {
    managerGetBillByID(param)
      .then((data) => {
        const newDatatable = data.items.map((e, i) => {
          return {
            key: i,
            address: e.address,
            billId: e.billId,
            categoryId: e.categoryId,
            categoryName: e.categoryName,
            description: e.description,
            destinationDepartmentAddress: e.destinationDepartmentAddress,
            destinationDepartmentId: e.destinationDepartmentId,
            price: e.price,
            startDepartmentAddress: e.startDepartmentAddress,
            startDepartmentId: e.startDepartmentId,
            status: e.status,
            userId: e.userId,
            weight: e.weight,
          };
        });

        setTableData(newDatatable);

        setTableTotal(data.totalRecord);
      })
      .catch((error) => {
        notification['error']({
          message: 'Lỗi khi lấy thông tin cho bảng',
          description: error,
        });
      });
  }, [param]);
  useMount(() => {
    getAllCategories()
      .then((data) => {
        setCategory(data);
      })
      .catch((err) => {
        notification['error']({
          message: 'Lỗi khi lấy danh sách loại hàng hóa',
          description: err,
        });
      });

    getAllProvice()
      .then((data) => {
        setProvince(data);
      })
      .catch((err) => {
        notification['error']({
          message: 'Lỗi khi lấy danh sách bưu cục',
          description: err,
        });
      });
  });
  const columns = [
    {
      title: 'Mã đơn hàng',
      width: 240,
      dataIndex: 'billId',
      key: 'billId',
      fixed: 'left',
    },
    {
      title: 'Nơi gửi',
      // width: '13%',
      dataIndex: 'startDepartmentAddress',
      key: '1',
    },
    {
      title: 'Nơi nhận',
      // width: '13%',
      dataIndex: 'destinationDepartmentAddress',
      key: '2',
    },
    {
      title: 'Đia chỉ nơi nhận',
      // width: '12%',
      dataIndex: 'address',
      key: '3',
    },
    {
      title: 'Chi phí',
      dataIndex: 'price',
      width: 100,
      key: '4',
    },

    {
      title: 'Thông tin hàng hóa',
      // width: '15%',
      dataIndex: 'description',
      key: '5',
    },
    {
      title: 'Loại hàng hóa',
      dataIndex: 'categoryName',
      width: 150,
      key: '6',
    },
    {
      title: 'Cân nặng',
      dataIndex: 'weight',
      width: 100,
      key: '8',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: 160,
      key: '9',
      render: (data) => {
        switch (data) {
          case 'Active':
            return (
              <Tag color='blue' key={data}>
                {statusArray[0].label}
              </Tag>
            );
          case 'Ongoing':
            return (
              <Tag color='purple' key={data}>
                {statusArray[1].label}
              </Tag>
            );
          case 'Pending':
            return (
              <Tag color='gold' key={data}>
                {statusArray[2].label}
              </Tag>
            );
          case 'Success':
            return (
              <Tag color='green' key={data}>
                {statusArray[3].label}
              </Tag>
            );
          case 'Unsuccess':
            return (
              <Tag color='error' key={data}>
                {statusArray[4].label}
              </Tag>
            );
          case 'Inactive':
            return (
              <Tag color='red' key={data}>
                {statusArray[5].label}
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
      // width: 180,
      render: (v, data) => (
        <Space size='small'>
          <Button type='link' onClick={() => updateBillData(data)}>
            Cập nhập đơn
          </Button>
          <Button type='link' onClick={() => deleteBillData(data)}>
            Hủy đơn
          </Button>
        </Space>
      ),
    },
  ];
  function updateBillData(getBill) {
    setbill(getBill);
    form.setFieldsValue({
      billId: getBill.billId,
      userId: getBill.userId,
      startDepartmentId: getBill.startDepartmentId,
      destinationDepartmentId: getBill.destinationDepartmentId,
      description: getBill.description,
      address: getBill.address,
      categoryId: getBill.categoryId,
      weight: getBill.weight,
      price: getBill.price,
      status: getBill.status,
    });
    setIsModalOpen(true);
  }

  function deleteBillData(data) {
    deleteBill(data)
      .then((data) => {
        notification['success']({
          message: 'Cập nhập bill thành công',
        });
        onSearch('');
      })
      .catch((error) => {
        notification['error']({
          message: 'Cập nhập bill không thành công',
          description: error,
        });
        onSearch('');
      });
  }

  const handleOk = (value) => {
    managerUpdateBill(value)
      .then((data) => {
        notification['success']({
          message: 'Cập nhập bill thành công',
        });
        onSearch('');
      })
      .catch((error) => {
        notification['error']({
          message: 'Cập nhập bill không thành công',
          description: error,
        });
        onSearch('');
      });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='manager-background'>
      <div className='manager-align'>
        <div className='table-align'>
          <div className='head-card'>
            <Row>
              <Col span={8}>
                <Search
                  placeholder='Tra cứu vận đơn'
                  onSearch={onSearch}
                  allowClear
                  enterButton='Tìm'
                  size='large'
                />
              </Col>
              <Col span={16} style={{ textAlign: 'end' }}>
                {/* <Button type='primary' size='large' icon={<AiOutlinePlus />}>
                  Tạo đơn hàng
                </Button> */}
              </Col>
            </Row>
          </div>
          <Table
            columns={columns}
            dataSource={tableData}
            scroll={{
              x: 2000,
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
            onOk={form.submit}
            onCancel={handleCancel}
            okText='Cập nhập'
            cancelText='Hủy'
            width={600}
          >
            <Form form={form} onFinish={handleOk} layout='vertical'>
              <Row>
                <Col span={11}>
                  <Form.Item label='Mã đơn' name='billId'>
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={2}></Col>
                <Col span={11}>
                  <Form.Item label='Mã khách hàng' name='userId'>
                    <Input disabled />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={11}>
                  <Form.Item
                    label='Nơi gửi'
                    name='startDepartmentId'
                    dependencies={['destinationDepartmentId']}
                    rules={[
                      {
                        required: true,
                        message: 'Hãy chọn nơi gửi và không trùng nơi nhận',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            getFieldValue('destinationDepartmentId') === value
                          ) {
                            return Promise.reject(
                              new Error('Nơi gửi và nơi nhận bị trùng nhau')
                            );
                          }
                          return Promise.resolve();
                        },
                      }),
                    ]}
                    hasFeedback
                  >
                    <Select
                      showSearch
                      placeholder='Chọn nơi gửi '
                      optionFilterProp='children'
                      filterOption={(input, option) =>
                        (option?.label ?? '')
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={province.map((provice) => ({
                        label: provice.provinceName,
                        value: provice.provinceId,
                      }))}
                    />
                  </Form.Item>
                </Col>
                <Col span={2}></Col>
                <Col span={11}>
                  <Form.Item
                    label='Nơi nhận'
                    name='destinationDepartmentId'
                    dependencies={['startDepartmentId']}
                    rules={[
                      {
                        required: true,
                        message: 'Hãy chọn nơi nhận và không trùng nơi gửi',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            getFieldValue('startDepartmentId') === value
                          ) {
                            return Promise.reject(
                              new Error('Nơi gửi và nơi nhận bị trùng nhau')
                            );
                          }
                          return Promise.resolve();
                        },
                      }),
                    ]}
                    hasFeedback
                  >
                    <Select
                      showSearch
                      placeholder='Chọn nơi nhận'
                      optionFilterProp='children'
                      filterOption={(input, option) =>
                        (option?.label ?? '')
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={province.map((provice) => ({
                        label: provice.provinceName,
                        value: provice.provinceId,
                      }))}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={11}>
                  <Form.Item
                    label='Thông tin hàng hóa'
                    name='description'
                    rules={[
                      {
                        required: true,
                        message: 'Hãy nhập thông tin người gửi và nhận',
                      },
                    ]}
                  >
                    <Input placeholder='Tên người gửi - sđt / Tên người nhận - sđt' />
                  </Form.Item>
                </Col>
                <Col span={2}></Col>
                <Col span={11}>
                  <Form.Item label='Địa chỉ nơi nhận' name='address'>
                    <Input placeholder='Nhập địa chỉ nơi nhận' />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={11}>
                  <Form.Item label='Loại hàng hóa' name='categoryId'>
                    <Select
                      showSearch
                      placeholder='Chọn loại hàng hóa '
                      optionFilterProp='children'
                      filterOption={(input, option) =>
                        (option?.label ?? '')
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={category.map((category) => ({
                        label: category.categoryName,
                        value: category.categoryId,
                      }))}
                    />
                  </Form.Item>
                </Col>
                <Col span={2}></Col>
                <Col span={11}>
                  <Form.Item label='Khối lượng' name='weight'>
                    <Input placeholder='Nhập khối lượng hàng hóa' />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={11}>
                  <Form.Item label='Chi phí' name='price' style={{ margin: 0 }}>
                    <Input placeholder='Nhập chi phí giao hàng' />
                  </Form.Item>
                </Col>
                <Col span={2}></Col>
                <Col span={11}>
                  <Form.Item
                    label='Trạng thái'
                    name='status'
                    style={{ margin: 0 }}
                  >
                    <Select
                      showSearch
                      placeholder='Chọn trạng thái'
                      optionFilterProp='children'
                      filterOption={(input, option) =>
                        (option?.label ?? '')
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={statusArray}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ManagerHome;
