import axiosInstance from "./axiosInstance";
import axios from 'axios';
export function adminDeleteUser(user) {
  const url = "https://deliver-store.tk/api/v1/employee?id=" + user.employeeId;
  console.log(user);
  return axios
    .delete(url, {
      param: {
        id: user.employeeId,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
