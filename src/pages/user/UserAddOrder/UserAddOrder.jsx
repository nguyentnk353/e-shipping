import React, { useState } from 'react';
import './UserAddOrder.css'
import { UserOutlined, CaretDownFilled, CodeSandboxSquareFilled } from '@ant-design/icons';
import { Select, Form, Modal, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import UserTest from '../../../components/UserNavbar/UserTest/UserTest';
import UserTest2 from '../../../components/UserNavbar/UserTest/UserTest2';
import { useMount } from 'ahooks';
import { getAllCategories } from './../../../services/getAllCategories';
import { getAllProvice } from './../../../services/getAllProvice';
import { caculatePrice } from '../../../services/caculatePrice';
import { createNewOrder } from './../../../services/createNewOrder';




function UserAddOrder() {
    const dropIcon = <CaretDownFilled />
    const [getCategories, setGetCategories] = useState([]);
    const [getProvices, setGetProvices] = useState([]);
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


    var state = {
        NameSender: "",
        PhoneSender: "",
        NameReceive: "",
        PhoneReceive: "",
        Description: "",
        CategoryId: 0,
        Weight: 0,
        Price: 0,
        UserId: "",
        StartDepartmentId: 0,
        DestinationDepartmentId: 0,
        Address: ""

    }

    // useEffect(()=>{
    //     caculatePrice(state)
    //         .then((data) => {
    //             setGePrice(data);
    //         })
    //         .catch((err) => console.log(err));
    // }, [state])

    const onSearch = (value) => {
        // console.log('search:', value);
    };

    const handleChange = (event, billAttribute) => {
        setBill({
            ...bill,
            [billAttribute]: event.target.value
        })
    }
    const handleChangeStartDepartmentId = (value, data) => {
        setBill({
            ...bill,
            StartDepartmentId: value,
            StartDepartmentName: data.label
        })
    }
    const handleChangeDestinationDepartmentId = (value, data) => {
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
        showModal();
    }


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
         setIsModalOpen(false);
         createNewOrder(bill)
            .then(
                alert("tạo đơn thành công")
            )
            .catch((err) => console.log(err));

    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (

        <div>
            <UserTest />
            <form>
                <div style={{ display: 'flex' }}>
                    <UserTest2 />
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
                                                        value={state.NameSender}
                                                        onChange={(event) => handleChange(event, 'NameSender')}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='input-every-2-8'>
                                                <Form.Item
                                                    label="Số điện thoại người gửi"
                                                    name='Phone-sender'
                                                    rules={[{ required: true }]}
                                                >
                                                    <input type='text' className='input-every 3' placeholder='Số điện thoại'
                                                        value={state.PhoneSender}
                                                        onChange={(event) => handleChange(event, 'PhoneSender')}
                                                    />
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
                                                        value={state.NameReceive}
                                                        onChange={(event) => handleChange(event, 'NameReceive')}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='input-every-2-8'>
                                                <Form.Item
                                                    label="Số điện thoại người nhận"
                                                    name='Phone-receiver'
                                                    rules={[{ required: true }]}
                                                >
                                                    <input type='text' className='input-every 3' placeholder='Số điện thoại'
                                                        value={state.PhoneReceive}
                                                        onChange={(event) => handleChange(event, 'PhoneReceive')}
                                                    />
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
                                                    //   value={state.StartDepartmentId}
                                                    onChange={handleChangeStartDepartmentId}
                                                >
                                                </Select>
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
                                                        >
                                                        </Select>
                                                    </div>

                                                    <input type='text' className='input-every-2' placeholder='Địa chỉ chi tiết'
                                                        //    value={state.Address}
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
                                                        >
                                                        </Select>
                                                    </div>
                                                </Form.Item>
                                            </div>
                                            <div className='input-every-2-8' style={{ marginLeft: '17px' }}>
                                                <Form.Item
                                                    label="Khối lượng (Kg)"
                                                    name='Weight'
                                                    rules={[{ required: true }]}
                                                >
                                                    <input type='text' className='input-every 1' placeholder='Khối lượng'
                                                        value={state.Weight}
                                                        onChange={(event) => handleChange(event, 'Weight')}
                                                    />

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
                                            <Col span={24}><p><b>Chi tiết: </b> {bill.Address}</p></Col>
                                        </Row>
                                        <Row>
                                            <Col span={24}><p><b>Description: </b> {bill.Description}</p></Col>
                                        </Row>
                                    </Modal>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserAddOrder