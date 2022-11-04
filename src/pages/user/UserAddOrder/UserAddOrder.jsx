import React, { useState } from 'react';
import './UserAddOrder.css'
import { UserOutlined, CaretDownFilled, CodeSandboxSquareFilled } from '@ant-design/icons';
import { Select, Form } from 'antd';
import 'antd/dist/antd.css';
import UserTest from '../../../components/UserNavbar/UserTest/UserTest';
import UserTest2 from '../../../components/UserNavbar/UserTest/UserTest2';
import { useMount } from 'ahooks';
import { getAllCategories } from './../../../services/getAllCategories';
import { getAllProvice } from './../../../services/getAllProvice';



function UserAddOrder() {
    const dropIcon = <CaretDownFilled />
    const [getCategories, setGetCategories] = useState([]);
    const [getProvices, setGetProvices] = useState([]);

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
        CategoryId: "",
        Weight: "",
        Price: "",
        UserId: "",
        StartDepartmentId: "",
        DestinationDepartmentId: "",
        Address: ""
        
    }
    let dataCreateBill = {
        Description: "",
        CategoryId: state.CategoryId,
        Weight: state.Weight,
        Price: "",
        UserId: "",
        StartDepartmentId: state.StartDepartmentId,
        DestinationDepartmentId: state.DestinationDepartmentId,
        Address: state.Address
    }

    const onSearch = (value) => {
        // console.log('search:', value);
      };

    const handleChange = (event, billAttribute) => {
        state[billAttribute] = event.target.value
    }
    const handleChangeStartDepartmentId = (value) => {
        state.StartDepartmentId = value
    }
    const handleChangeDestinationDepartmentId = (value) => {
        state.DestinationDepartmentId = value
    }
    const handleChangeCategoryId = (value) => {
        state.CategoryId = value
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // let a = `Người gửi:${state.NameSender} - SĐT:${state.PhoneSender} / Người nhận:${state.NameReceive} - SĐT:${state.PhoneReceive}`
        // dataCreateBill.Description = a;
        // console.log(dataCreateBill)
        console.log(state);
    }
    
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
                                                    label="Khối lượng"
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
                                    <button className='btn-page-create-new-order' onClick={(event) =>handleSubmit(event)}>
                                        TẠO ĐƠN HÀNG
                                    </button>
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