import { Checkbox, Form, Input, Button } from 'antd';
import React from 'react';
import logo from '../../../assets/images/e-shipping-logo.png';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import './Login.less';

const Login = () => {
  function handleFinish(value) {
    console.log(value);
  }
  return (
    <div className='login-background'>
      <div className='login-card'>
        <div className='login-card-head'>
          <div className='login-card-head-left'>
            <h1>Đăng nhập</h1>
            <h4>Chào mừng trở lại</h4>
          </div>
          {/* <div className='login-card-head-right'> */}
          <img src={logo} alt='Pet transport logo' className='login-logo' />
          {/* </div> */}
        </div>
        <div className='login-input'>
          <Form name='basic' onFinish={handleFinish}>
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Hãy nhập đúng tên đăng nhập!',
                },
              ]}
            >
              <Input placeholder='Tên đăng nhập' prefix={<AiOutlineUser />} />
            </Form.Item>

            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Hãy nhập đúng mật khẩu!',
                },
              ]}
              style={{ margin: '0' }}
            >
              <Input.Password
                placeholder='Mật khẩu'
                prefix={<AiOutlineLock />}
                type='password'
              />
            </Form.Item>

            <Form.Item style={{ margin: '0' }}>
              <a className='login-form-forgot' href='#'>
                Quên mật Khẩu?
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                Đăng nhập
              </Button>
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              Bạn chưa có tài khoản? <a href='/register'>Đăng ký ngay!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
