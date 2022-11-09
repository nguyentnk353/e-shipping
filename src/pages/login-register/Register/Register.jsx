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
  AiOutlineHome,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
} from 'react-icons/ai';
import logo from '../../../assets/images/e-shipping-logo.png';
import './Register.less';
import { register } from './../../../services/register';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  function handleFinish(value) {
    register(value)
      .then((data) => {
        const success = 'Register Success';
        if (data.localeCompare(success, 'en', { sensitivity: 'base' }) == 0) {
          message.success('Đăng ký thành công');
          setTimeout(() => {
            navigate('/login', { replace: true });
          }, 2000);
        } else {
          message.error('Đăng ký không thành công');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div className='register-background'>
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
            <Form name='basic' autoComplete='off' onFinish={handleFinish}>
              <Form.Item
                name='fullName'
                rules={[
                  {
                    required: true,
                    message: 'Hãy nhập đầy đủ họ tên!',
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder='Họ & tên' prefix={<AiOutlineUser />} />
              </Form.Item>

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
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Hãy xác nhận mật khẩu!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'Mật khẩu xác nhận không khớp với mật khẩu trên, xin hãy nhập lại !'
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder='Xác nhận mật khẩu'
                  prefix={<AiOutlineLock />}
                />
              </Form.Item>
              <Form.Item
                name='address'
                rules={[
                  {
                    required: true,
                    message: 'Hãy nhập địa chỉ thường trú!',
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  placeholder='Địa chỉ thường trú'
                  prefix={<AiOutlineHome />}
                />
              </Form.Item>
              <Form.Item
                name='email'
                rules={[
                  {
                    type: 'email',
                    message:
                      'Hãy nhập đúng định dạng email (email@domain.com)!',
                  },
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
