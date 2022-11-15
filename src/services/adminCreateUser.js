import axios from 'axios';
import axiosInstance from './axiosInstance';
export function adminCreateUser(user) {
  const url = 'https://deliver-store.tk/api/v1/employee';
  return axiosInstance
    .post(url, {
        loginName: user.loginName,
        password: user.password,
        fullName: user.fullName,
        address: user.address,
        email: user.email,
        phone: user.phone,
        departmentId: user.departmentId,
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}
