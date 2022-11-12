import { Checkbox, Form, Input, Button, Alert } from 'antd';
import React from 'react';
import logo from '../../../assets/images/e-shipping-logo.png';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import jwt_decode from 'jwt-decode';
import { login } from '../../../services/login';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginEmployee } from './../../../services/loginEmployee';
import './LoginEmployee.less';
const LoginEmployee = () => {
  const navigate = useNavigate();
  const [invalidLogin, setInvalideLogin] = useState(false);
  function alertClose() {
    setInvalideLogin(false);
  }
  function handleFinish(value) {
    loginEmployee(value)
      .then((data) => {
        const errLogin = 'Invalid Login';

        if (data.localeCompare(errLogin, 'en', { sensitivity: 'base' }) == 0) {
          setInvalideLogin(true);
        } else {
          const decoded = jwt_decode(data);
          localStorage.setItem('loginUser', JSON.stringify(decoded));
          localStorage.setItem('token', data);
          
          switch (decoded.Role) {
            case 'admin':
              return navigate('/admin/home', { replace: true });
            case 'customer':
              return navigate('/user/home', { replace: true });
            case 'employee':
              return navigate('/manager/home', { replace: true });
            default:
              return null;
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className='login-background'>
      <div className='login-card'>
        <div className='login-card-head'>
          <div className='login-card-head-left'>
            <h2>Đăng nhập dành cho nhân vên</h2>
            {/* <h4>Chào mừng trở lại</h4> */}
          </div>

          <img
            src={logo}
            alt='Pet transport logo'
            className='login-logo'
            onClick={() => navigate('/home', { replace: true })}
            style={{ cursor: 'pointer' }}
          />
        </div>
        {invalidLogin && (
          <Alert
            message='Sai tên đăng nhập hoặc mật khẩu'
            type='error'
            showIcon
            closable
            onClose={alertClose}
          />
        )}
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
              Bạn không phải là nhân viên?{' '}
              <a href='/login'>Quay lại đăng nhập!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginEmployee;
