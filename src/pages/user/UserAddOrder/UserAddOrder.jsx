import React from 'react';
import './UserAddOrder.css'
import { UserOutlined, CaretDownFilled, CodeSandboxSquareFilled } from '@ant-design/icons';
import { Select, Form } from 'antd';
import 'antd/dist/antd.css';
import UserTest from '../../../components/UserNavbar/UserTest/UserTest';
import UserTest2 from '../../../components/UserNavbar/UserTest/UserTest2';



function UserAddOrder() {
    const dropIcon = <CaretDownFilled />
    return (

        <div>
            <UserTest />
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
                                                <input type='text' className='input-every 1' placeholder='Họ và tên người gửi' />
                                            </Form.Item>
                                        </div>
                                        <div className='input-every-2-8'>
                                            <Form.Item
                                                label="Số điện thoại người gửi"
                                                name='Phone-sender'
                                                rules={[{ required: true }]}
                                            >
                                                <input type='text' className='input-every 3' placeholder='Số điện thoại' />
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
                                                <input type='text' className='input-every 1' placeholder='Họ và tên người nhận' />
                                            </Form.Item>
                                        </div>
                                        <div className='input-every-2-8'>
                                            <Form.Item
                                                label="Số điện thoại người nhận"
                                                name='Phone-receiver'
                                                rules={[{ required: true }]}
                                            >
                                                <input type='text' className='input-every 3' placeholder='Số điện thoại' />
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
                                            style={{ height: '13px', marginBottom:'27px' }}
                                        >
                                        </Form.Item>
                                        <div style={{ fontWeight: '480', margin:'10px 0' }}>
                                            <Select
                                                showSearch
                                                placeholder="Tỉnh/Thành phố"
                                                suffixIcon={dropIcon}
                                                size='large'
                                                style={{
                                                    width: '265px',
                                                    textAlign: 'left',
                                                    fontSize: '14px',
                                                    marginRight: '100%'
                                                }}
                                                optionFilterProp="children"
                                                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                            // options={data.Provices}
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
                                                    style={{
                                                        width: '265px',
                                                        textAlign: 'left',
                                                        fontSize: '14px',
                                                        fontWeight: '400',
                                                    }}
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                                // options={data.Provices}
                                                >
                                                </Select>
                                                </div>

                                                <input type='text' className='input-every-2' placeholder='Địa chỉ chi tiết' />
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
                                                        style={{
                                                            width: '265px',
                                                            textAlign: 'start',
                                                            fontSize: '14px',
                                                            fontWeight: '400',
                                                        }}
                                                        optionFilterProp="children"
                                                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                                    // options={data.Provices}
                                                    >
                                                    </Select>
                                                </div>
                                            </Form.Item>
                                        </div>
                                        <div className='input-every-2-8' style={{marginLeft:'17px'}}>
                                            <Form.Item
                                                label="Khối lượng"
                                                name='Weight'
                                                rules={[{ required: true }]}
                                            >
                                                <div><input type='text' className='input-every 1' placeholder='Khối lượng' /></div>
                                            </Form.Item>
                                        </div>

                                    </div>
                                </div>
                                <button className='btn-page-create-new-order'>TẠO ĐƠN HÀNG</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default UserAddOrder