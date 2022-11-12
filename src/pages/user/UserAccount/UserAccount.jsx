import { Form } from 'antd';
import React, { useState } from 'react';
import './UserAccount.less';
import { useMount } from 'ahooks';
import { getAllBillOneUser } from './../../../services/getAllBillOneUser';


function UserAccount() {
    const [getParams, setGetParams] = useState({
        items: [],
        totalRecord: 1
      });

    useMount(() => {
        getAllBillOneUser({
            PageIndex: 1,
            PageSize: 4,
            userId: user.Id,
          })
        .then((data) => {
            setGetParams(data);
        })
        .catch((err) => console.log(err));
      });
    
    const user = JSON.parse(localStorage.getItem('loginUser'));
    
    return (
        <div className='page-user-account'>
            <div className='title-user-account'>
                Thông tin khách hàng
            </div>
            <div className='frame-info'>

                <div className='input-userAccount-1-8'>
                    <div className='div-input-userAccount'>
                        <Form.Item
                            label='Customer ID'
                            name='Account-CustomerId'
                            rules={[{ required: true }]}
                        >
                            <input
                                type='text'
                                className='input-userAccount 1'
                                placeholder={user.Id + user.exp}
                                disabled
                            />
                        </Form.Item>
                    </div>
                    <div className='div-input-userAccount'>
                        <Form.Item
                            label='Tên khách hàng, công ty'
                            name='Account-Name'
                            rules={[{ required: true }]}
                        >
                            <input
                                type='text'
                                className='input-userAccount 2'
                                placeholder={user.Name}
                                disabled
                            />
                        </Form.Item>
                    </div>
                </div>

                <div className='input-userAccount-1-8'>
                    <div className='div-input-userAccount'>
                        <Form.Item
                            label='Email'
                            name='Account-Email'
                            rules={[{ required: true }]}
                        >
                            <input
                                type='text'
                                className='input-userAccount 3'
                                placeholder={user.Email}
                                disabled
                            />
                        </Form.Item>
                    </div>
                    <div className='div-input-userAccount'>
                        <Form.Item
                            label='Loại tài khoản'
                            name='Account-Role'
                            rules={[{ required: true }]}
                        >
                            <input
                                type='text'
                                className='input-userAccount 4'
                                placeholder={user.Role}
                                disabled
                            />
                        </Form.Item>
                    </div>
                </div>

                <div className='input-userAccount-1-8'>
                    <div className='div-input-userAccount'>
                        <Form.Item
                            label='Địa chỉ khách hàng'
                            name='Account-Address'
                            rules={[{ required: true }]}
                        >
                            <input
                                type='text'
                                className='input-userAccount 5'
                                placeholder={user.Address}
                                disabled
                            />
                        </Form.Item>
                    </div>
                    <div className='div-input-userAccount'>
                        <Form.Item
                            label='Tổng số đơn đã hàng hoàn thành'
                            name='Account-NumberBill'
                            rules={[{ required: true }]}
                        >
                            <input
                                type='text'
                                className='input-userAccount 6'
                                placeholder={getParams.totalRecord}
                                disabled
                            />
                        </Form.Item>
                    </div>
                </div>


                <div className='input-userAccount-1-8'>
                    <div className='div-input-userAccount'>
                        <Form.Item
                            label='Người nhận tiền'
                            name='Account-Receivice'
                            rules={[{ required: true }]}
                        >
                            <input
                                type='text'
                                className='input-userAccount 7'
                                placeholder='Người nhận tiền'
                                disabled
                            />
                        </Form.Item>
                    </div>
                    <div className='div-input-userAccount'>
                        <Form.Item
                            label='Chứng mình thư/ Mã số thuế'
                            name='Account-CMT'
                            rules={[{ required: true }]}
                        >
                            <input
                                type='text'
                                className='input-userAccount 8'
                                placeholder='385123987'
                                disabled
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAccount