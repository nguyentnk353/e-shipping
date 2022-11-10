import { CaretDownFilled, CodeSandboxSquareFilled, UserOutlined } from '@ant-design/icons';
import { useMount } from 'ahooks';
import { Col, Form, Modal, Row, Select } from 'antd';
import React, { useState } from 'react';
import { caculatePrice } from '../../../services/caculatePrice';
import { createNewOrder } from './../../../services/createNewOrder';
import { getAllCategories } from './../../../services/getAllCategories';
import { getAllProvice } from './../../../services/getAllProvice';
import './UserAddOrder.less';



function UserAddOrder() {
    const dropIcon = <CaretDownFilled />
    const [getCategories, setGetCategories] = useState([]);
    const [getProvices, setGetProvices] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errors, setErrors] = useState({
        NameSender: "",
        PhoneSender: "",
        NameReceive: "",
        PhoneReceive: "",
        CategoryId: "",
        Weight: "",
        StartDepartmentId: "",
        DestinationDepartmentId: "",
        Address: ""
    });
    const [bill, setBill] = useState({
        NameSender: "",
        PhoneSender: "",
        NameReceive: "",
        PhoneReceive: "",
        Description: "",
        CategoryId: 0,
        CategoryName: "",
        Weight: 0,
        Price: 0,
        UserId: 1,
        StartDepartmentId: 0,
        StartDepartmentName: "",
        DestinationDepartmentId: 0,
        DestinationDepartmentName: "",
        Address: ""
    });

    useMount(() => {
        getAllCategories()
            .then((data) => {
                setGetCategories(data);
            })
            .catch((err) => console.log(err));

        getAllProvice()
            .then((data) => {
                setGetProvices(data);
            })
            .catch((err) => console.log(err));


    });

    const onSearch = (value) => {
        // console.log('search:', value);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        createNewOrder(bill)
            .then(
                alert("tạo đơn thành công")
            )
            .catch(err => {
                if (err.response) {
                    console.log(err.response.status)
                }
            });

    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    //blur validate
    const validade = (event, errorAttribute, errorName) => {
        if (event.target.value === '' || event.target.value <= 0) {
            setErrors({
                ...errors,
                [errorAttribute]: `Vui lòng nhập ${errorName}`
            });
        } else {
            setErrors({
                ...errors,
                [errorAttribute]: ''
            });
        }
    }

    const blurStartDepartmentId = (value, data) => {
        if ((bill.StartDepartmentId === 0) && (typeof (value) === 'object' || value === 0)) {
            setErrors({
                ...errors,
                StartDepartmentId: 'Vui lòng chọn bưu cục gửi'
            });
        } else {
            setErrors({
                ...errors,
                StartDepartmentId: ''
            })
        }
    }

    const blurChangeDestinationDepartmentId = (value, data) => {
        if ((bill.DestinationDepartmentId === 0) && (typeof (value) === 'object' || value === 0)) {
            setErrors({
                ...errors,
                DestinationDepartmentId: 'Vui lòng chọn bưu cục nhận'
            });
        } else {
            setErrors({
                ...errors,
                DestinationDepartmentId: ''
            })
        }
    }

    const blurChangeCategoryId = (value, data) => {
        if ((bill.CategoryId === 0) && (typeof (value) === 'object' || value === 0)) {
            setErrors({
                ...errors,
                CategoryId: 'Vui lòng chọn loại hàng hóa'
            });
        } else {
            setErrors({
                ...errors,
                CategoryId: ''
            })
        }
    }

    //handle Input
    const handleChange = (event, billAttribute) => {
        setErrors({
            ...errors,
            [billAttribute]: ''
        })
        if (billAttribute === 'Weight')
            event.target.value = Math.ceil(event.target.value)
        setBill({
            ...bill,
            [billAttribute]: event.target.value
        })
    }

    const handleChangeStartDepartmentId = (value, data) => {
        if (errors.DestinationDepartmentId === 'Bưu cục nhận và gửi phải khác nhau')
            setErrors({
                ...errors,
                DestinationDepartmentId: ''
            })

        setBill({
            ...bill,
            StartDepartmentId: value,
            StartDepartmentName: data.label
        })
    }

    const handleChangeDestinationDepartmentId = (value, data) => {
        if (errors.DestinationDepartmentId === 'Bưu cục nhận và gửi phải khác nhau')
            setErrors({
                ...errors,
                DestinationDepartmentId: ''
            })
        setBill({
            ...bill,
            DestinationDepartmentId: value,
            DestinationDepartmentName: data.label
        })
    }

    const handleChangeCategoryId = (value, data) => {

        setBill({
            ...bill,
            CategoryId: value,
            CategoryName: data.label
        })
    }

    function checkSubmit() {
        if (bill.NameSender === '') return -1;
        if (bill.PhoneSender === '') return -1;
        if (bill.NameReceive === '') return -1;
        if (bill.PhoneReceive === '') return -1;
        if (bill.StartDepartmentId === 0) return -1;
        if (bill.StartDepartmentId === bill.DestinationDepartmentId) return 0;
        if (bill.StartDepartmentId === 0) return -1;
        if (bill.CategoryId === 0) return -1;
        if (bill.Weight <= 0) return -1;
        return 1;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let description = `Người gửi: ${bill.NameSender} - ${bill.PhoneSender} / Người nhận: ${bill.NameReceive} - ${bill.PhoneReceive}`
        caculatePrice(bill)
            .then((data) => {
                setBill((c) => ({
                    ...c,
                    Price: data,
                    Description: description
                }));
            })
            .catch((err) => console.log(err));
        switch (checkSubmit()) {
            case -1:
                alert("Vui lòng nhập đầy đủ thông tin")
                break;
            case 0:
                setErrors({
                    ...errors,
                    DestinationDepartmentId: 'Bưu cục nhận và gửi phải khác nhau'
                })
                break;
            case 1:
                showModal();
                break;
            default:
                break;
        }
    }

    return (

            <form id='form-create-new-order'>
                <div>
                    <div className='page-add-order'>
                        <div className='frame-sender-receiver'>
                            <div>
                                <div className='frame sender'>
                                    <div className='content sender'>
                                        <div className='title-frames'>
                                            <UserOutlined className='icon-page-add' />
                                            <div style={{ paddingRight: '78%' }}>Nguời gửi</div>
                                        </div>
                                        <hr color='black' />

                                        <div className='input-1-4'>
                                            <div className='input-every-2-8'>
                                                <Form.Item
                                                    label="Họ và tên người gửi"
                                                    name='FullName-sender'
                                                    rules={[{ required: true }]}
                                                >
                                                    <input type='text' className='input-every 1' placeholder='Họ và tên người gửi'
                                                        value={bill.NameSender}
                                                        onChange={(event) => handleChange(event, 'NameSender')}
                                                        onBlur={(event) => validade(event, 'NameSender', 'họ và tên người gửi')}

                                                    />
                                                    <span className="form-message-page-create-new-order">{errors.NameSender}</span>
                                                </Form.Item>
                                            </div>
                                            <div className='input-every-2-8'>
                                                <Form.Item
                                                    label="Số điện thoại người gửi"
                                                    name='Phone-sender'
                                                    rules={[{ required: true }]}
                                                >
                                                    <input type='text' className='input-every 3' placeholder='Số điện thoại'
                                                        value={bill.PhoneSender}
                                                        onChange={(event) => handleChange(event, 'PhoneSender')}
                                                        onBlur={(event) => validade(event, 'PhoneSender', 'số điện thoại')}
                                                    />
                                                    <span className="form-message-page-create-new-order">{errors.PhoneSender}</span>
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='frame receiver'>
                                <div className='content receiver'>
                                    <div className='title-frames'>
                                        <UserOutlined className='icon-page-add' />
                                        <div style={{ paddingRight: '75%' }}>Nguời nhận</div>
                                    </div>
                                    <hr color='black' />

                                    <div>
                                        <div className='input-1-4'>
                                            <div className='input-every-2-8'>
                                                <Form.Item
                                                    label="Họ và tên người nhận"
                                                    name='FullName-receiver'
                                                    rules={[{ required: true }]}
                                                >
                                                    <input type='text' className='input-every 1' placeholder='Họ và tên người nhận'
                                                        value={bill.NameReceive}
                                                        onChange={(event) => handleChange(event, 'NameReceive')}
                                                        onBlur={(event) => validade(event, 'NameReceive', 'họ và tên người nhận')}
                                                    />
                                                    <span className="form-message-page-create-new-order">{errors.NameReceive}</span>
                                                </Form.Item>
                                            </div>
                                            <div className='input-every-2-8'>
                                                <Form.Item
                                                    label="Số điện thoại người nhận"
                                                    name='Phone-receiver'
                                                    rules={[{ required: true }]}
                                                >
                                                    <input type='text' className='input-every 3' placeholder='Số điện thoại'
                                                        value={bill.PhoneReceive}
                                                        onChange={(event) => handleChange(event, 'PhoneReceive')}
                                                        onBlur={(event) => validade(event, 'PhoneReceive', 'số điện thoại')}
                                                    />
                                                    <span className="form-message-page-create-new-order">{errors.PhoneReceive}</span>
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='frame-merchandise-service'>
                            <div>
                                <div className='frame service'>
                                    <div className='content service'>
                                        <div className='title-frames'>
                                            <CodeSandboxSquareFilled className='icon-page-service' />
                                            <div style={{ paddingRight: '50%' }}>Thông tin dịch vụ - Hàng hóa</div>
                                        </div>
                                        <hr color='black' />

                                        <div style={{ fontWeight: '700' }}>
                                            <Form.Item
                                                label="Bưu cục gửi hàng"
                                                name='Address-send'
                                                rules={[{ required: true }]}
                                                style={{ height: '13px', marginBottom: '27px' }}
                                            >
                                            </Form.Item>
                                            <div style={{ fontWeight: '480', margin: '10px 0' }}>
                                                <Select
                                                    showSearch
                                                    placeholder="Tỉnh/Thành phố"
                                                    suffixIcon={dropIcon}
                                                    size='large'
                                                    onSearch={onSearch}
                                                    required
                                                    style={{
                                                        width: '265px',
                                                        textAlign: 'left',
                                                        fontSize: '14px',
                                                        marginRight: '100%'
                                                    }}
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                                                    options={getProvices.map((provice) => ({
                                                        label: provice.provinceName,
                                                        value: provice.provinceId,
                                                    }))}
                                                    //   value={bill.StartDepartmentId}
                                                    onChange={handleChangeStartDepartmentId}
                                                    onBlur={blurStartDepartmentId}
                                                >
                                                </Select>
                                                <span className="form-message-page-create-new-order-service">{errors.StartDepartmentId}</span>
                                            </div>

                                        </div>


                                        <div>
                                            <div className='input-every-2-8'>
                                                <Form.Item
                                                    label="Bưu cục nhận hàng"
                                                    name='Address-receiver'
                                                    rules={[{ required: true }]}
                                                    style={{ height: '13px' }}

                                                >
                                                </Form.Item>
                                                <div className='input-3-5'>
                                                    <div className='input-new-5-7-9'>
                                                        <Select
                                                            showSearch
                                                            placeholder="Tỉnh/Thành phố"
                                                            suffixIcon={dropIcon}
                                                            size='large'
                                                            onSearch={onSearch}
                                                            style={{
                                                                width: '265px',
                                                                textAlign: 'left',
                                                                fontSize: '14px',
                                                                fontWeight: '400',
                                                            }}
                                                            optionFilterProp="children"
                                                            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                                                            options={getProvices.map((provice) => ({
                                                                label: provice.provinceName,
                                                                value: provice.provinceId,
                                                            }))}
                                                            onChange={handleChangeDestinationDepartmentId}
                                                            onBlur={blurChangeDestinationDepartmentId}
                                                        >
                                                        </Select>
                                                        <span className="form-message-page-create-new-order-service">{errors.DestinationDepartmentId}</span>
                                                    </div>

                                                    <input type='text' className='input-every-2' placeholder='Địa chỉ chi tiết'
                                                        //    value={bill.Address}
                                                        onChange={(event) => handleChange(event, 'Address')}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex' }}>
                                            <div className='input-every-2-8'>
                                                <Form.Item
                                                    label="Loại hàng hóa"
                                                    name='Type-merchandise'
                                                    rules={[{ required: true }]}
                                                >
                                                    <div >
                                                        <Select
                                                            showSearch
                                                            className='input-new-5-7-9'
                                                            suffixIcon={dropIcon}
                                                            placeholder="Chọn loại hàng hóa"
                                                            size='large'
                                                            onSearch={onSearch}
                                                            style={{
                                                                width: '265px',
                                                                textAlign: 'start',
                                                                fontSize: '14px',
                                                                fontWeight: '400',
                                                            }}
                                                            optionFilterProp="children"
                                                            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                                                            options={getCategories.map((category) => ({
                                                                label: category.categoryName,
                                                                value: category.categoryId,
                                                            }))}

                                                            onChange={handleChangeCategoryId}
                                                            onBlur={blurChangeCategoryId}
                                                        >
                                                        </Select>
                                                        <span className="form-message-page-create-new-order-service">{errors.CategoryId}</span>
                                                    </div>
                                                </Form.Item>
                                            </div>
                                            <div className='input-every-2-8' style={{ marginLeft: '17px' }}>
                                                <Form.Item
                                                    label="Khối lượng (Kg)"
                                                    name='Weight'
                                                    rules={[{ required: true }]}
                                                >
                                                    <input type='number' className='input-every 1' placeholder='Khối lượng'
                                                        // value={bill.Weight}
                                                        onChange={(event) => handleChange(event, 'Weight')}
                                                        onBlur={(event) => validade(event, 'Weight', 'khối lượng > 0')}
                                                    />
                                                    <span className="form-message-page-create-new-order-service">{errors.Weight}</span>
                                                </Form.Item>
                                            </div>

                                        </div>
                                    </div>
                                    <button className='btn-page-create-new-order' onClick={(event) => handleSubmit(event)}>
                                        XEM ĐƠN HÀNG
                                    </button>
                                    <Modal title="Thông tin đơn hàng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                        <Row>
                                            <Col span={12}><p><b>Người gửi:</b> {bill.NameSender}</p></Col>
                                            <Col span={12}><p><b>Số điện thoại:</b> {bill.PhoneSender}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col span={12}><p><b>Người nhận:</b> {bill.NameReceive}</p></Col>
                                            <Col span={12}><p><b>Số điện thoại:</b> {bill.PhoneReceive}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col span={12}><p><b>Loại hàng hóa:</b> {bill.CategoryName}</p></Col>
                                            <Col span={12}><p><b>Khối lượng:</b> {bill.Weight} Kg</p></Col>
                                        </Row>
                                        <Row>
                                            <Col span={12}><p><b>Bưu cục gửi:</b> {bill.StartDepartmentName}</p></Col>
                                            <Col span={12}><p><b>Bưu cục nhận:</b> {bill.DestinationDepartmentName}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col span={24}><p hidden={bill.Address === ''}><b>Địa chỉ nhận: </b> {bill.Address}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col span={24}><p><b>Tổng Phí: </b>{bill.Price}. 000 VNĐ</p></Col>
                                        </Row>
                                    </Modal>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
    )

}

export default UserAddOrder