import axios from 'axios';
import axiosInstance from './axiosInstance';
export function adminUpdateUser(user) {
  const url = 'https://deliver-store.tk/api/v1/employee';

  return axiosInstance
    .put(url, {
      employeeId: user.employeeId,
      fullName: user.fullName,
      address: user.address,
      email: user.email,
      phone: user.phone,
      departmentId: user.departmentId,
      statusId: user.statusId
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
