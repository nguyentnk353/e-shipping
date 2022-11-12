import axios from 'axios';
import axiosInstance from './axiosInstance';

export function register(props) {
  const url = 'https://deliver-store.tk/api/v1/customer/register';
  const data = {
    loginName: props.username,
    password: props.password,
    confirmPassword: props.confirmPassword,
    fullName: props.fullName,
    address: props.address,
    email: props.email,
    phone: props.phone,
  };
  return axiosInstance
    .post(url, data)
    .then((response) => response.data)
    .catch((err) => err.response.data);
}
