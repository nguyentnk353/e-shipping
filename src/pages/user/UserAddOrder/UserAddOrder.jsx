import React from 'react';
import './UserAddOrder.css'
import { UserOutlined, ProfileFilled, CaretDownFilled, CodeSandboxSquareFilled } from '@ant-design/icons';
import { Button, Select, Form } from 'antd';
import 'antd/dist/antd.css';
// import UserTest from '../../../components/UserNavbar/UserTest/UserTest';
// import UserTest2 from '../../../components/UserNavbar/UserTest/UserTest2';



function UserAddOrder() {
    const dropIcon = <CaretDownFilled />
    return (

        <div>
            {/* <UserTest /> */}
            <div style={{ display: 'flex' }}>
                {/* <UserTest2 /> */}
                <div className='page-add-order'>
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
                                            label="Địa chỉ gửi hàng"
                                            name='Address-send'
                                            rules={[{ required: true }]}
                                        >
                                            <div style={{ fontWeight: '480' }}>
                                                <Select
                                                    showSearch
                                                    placeholder="Chọn tỉnh thành"
                                                    suffixIcon={dropIcon}
                                                    size='large'
                                                    style={{
                                                        width: '565px',
                                                        textAlign: 'left',
                                                        fontSize: '14px',
                                                    }}
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                                // options={data.Provices}
                                                >
                                                </Select>
                                            </div>
                                        </Form.Item>
                                    </div>


                                    <div>
                                        <div className='input-every-2-8'>
                                            <Form.Item
                                                label="Địa chỉ nhận hàng"
                                                name='Address-receiver'
                                                rules={[{ required: true }]}
                                            >
                                                <input type='text' className='input-every-2' placeholder='Địa chỉ nhận hàng' />
                                            </Form.Item>
                                        </div>
                                    </div>

                                    <div className='input-3-5'>
                                        <Select
                                            showSearch
                                            placeholder="Tỉnh/Thành phố"
                                            suffixIcon={dropIcon}
                                            size='large'
                                            style={{
                                                width: '32%',
                                                textAlign: 'left',
                                                fontSize: '14px',
                                            }}
                                            optionFilterProp="children"
                                            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                        // options={data.Provices}
                                        >
                                        </Select>
                                        <Select
                                            showSearch
                                            placeholder="Địa chỉ gửi hàng"
                                            suffixIcon={dropIcon}
                                            size='large'
                                            style={{
                                                width: '32%',
                                                textAlign: 'left',
                                                fontSize: '14px',
                                            }}
                                            optionFilterProp="children"
                                            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                        // options={data.Provices}
                                        >
                                        </Select>
                                        <Select
                                            showSearch
                                            placeholder="Địa chỉ gửi hàng"
                                            suffixIcon={dropIcon}
                                            size='large'
                                            style={{
                                                width: '32%',
                                                textAlign: 'left',
                                                fontSize: '14px',
                                            }}
                                            optionFilterProp="children"
                                            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                        // options={data.Provices}
                                        >
                                        </Select>
                                    </div><br />

                                    <div style={{ display: 'flex' }}>
                                        <div className='input-every-2-8'>
                                            <Form.Item
                                                label="Loại hàng hóa"
                                                name='Type-merchandise'
                                                rules={[{ required: true }]}
                                            >
                                                <div>
                                                    <Select
                                                        showSearch
                                                        suffixIcon={dropIcon}
                                                        size='large'
                                                        style={{
                                                            width: '265px',
                                                            textAlign: 'left',
                                                            fontSize: '14px',
                                                        }}
                                                        optionFilterProp="children"
                                                        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                                    // options={data.Provices}
                                                    >
                                                    </Select>
                                                </div>
                                            </Form.Item>
                                        </div>
                                        <div className='input-every-2-8'>
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
                            </div>
                        </div>
                    </div>
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
                                    <div style={{ paddingRight: '38%' }}>Nguời nhận</div>
                                    <Button type="primary" icon={<ProfileFilled className='icon-page-add' />}>
                                        Danh sách địa chỉ nhận
                                    </Button>
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
                            <button className='btn-page-create-new-order'>TẠO ĐƠN HÀNG</button>
                        </div>                          
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserAddOrder