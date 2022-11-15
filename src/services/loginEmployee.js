import axios from 'axios';
import axiosInstance from './axiosInstance';
export function loginEmployee(props) {
  const url = 'https://deliver-store.tk/api/v1/employee/authenticate';
  const LoginName = props.username;
  const Password = props.password;
  const postData = {};
  const error = { error: 'login-fail' };
  return axiosInstance
    .post(url, postData, {
      params: {
        loginName: LoginName,
        password: Password,
      },
    })
    .then((response) => response.data)
    .catch((err) => err.response.data);
}
