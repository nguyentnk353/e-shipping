import React from 'react';
import {
  Layout,
  Button,
  Checkbox,
  Form,
  Input,
  Card,
  Space,
  message,
} from 'antd';
import {
  AiOutlineLock,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
} from 'react-icons/ai';
import logo from '../../../assets/images/e-shipping-logo.png';
import './Register.less';

const Register = () => {
  return (
    <div>
      <div className='login-background'>
        <div className='login-card'>
          <div className='login-card-head'>
            <div className='login-card-head-left'>
              <h1>Đăng ký</h1>
              <h4>
                Chào mừng đến với <br />
                E-shipping
              </h4>
            </div>
            {/* <div className='login-card-head-right'> */}
            <img src={logo} alt='Pet transport logo' className='login-logo' />
            {/* </div> */}
          </div>
          <div className='login-input'>
            <Form
              name='basic'
              // initialValues={{
              //   remember: true,
              // }}
              autoComplete='off'
            >
              <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Hãy nhập tên đăng nhập!',
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
                    message: 'Hãy nhập mật khẩu!',
                  },
                ]}
              >
                <Input.Password
                  placeholder='Mật khẩu'
                  prefix={<AiOutlineLock />}
                />
              </Form.Item>
              <Form.Item
                name='confirmPassword'
                rules={[
                  {
                    required: true,
                    message: 'Hãy xác nhận mật khẩu!',
                  },
                ]}
              >
                <Input.Password
                  placeholder='Xác nhận mật khẩu'
                  prefix={<AiOutlineLock />}
                />
              </Form.Item>

              <Form.Item
                name='fullName'
                rules={[
                  {
                    required: true,
                    message: 'Hãy nhập đầy đủ họ tên!',
                  },
                ]}
              >
                <Input placeholder='Họ & tên' prefix={<AiOutlineUser />} />
              </Form.Item>

              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Hãy nhập email!',
                  },
                ]}
              >
                <Input placeholder='Email' prefix={<AiOutlineMail />} />
              </Form.Item>
              <Form.Item
                name='phone'
                rules={[
                  {
                    required: true,
                    message: 'Hãy nhập số điện thoại!',
                  },
                ]}
              >
                <Input
                  placeholder='Số điện thoại'
                  prefix={<AiOutlinePhone />}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                >
                  Đăng ký
                </Button>
              </Form.Item>
              <Form.Item style={{ textAlign: 'center' }}>
                Bạn đã có tài khoản? <a href='/login'>Đăng nhập ngay!</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
