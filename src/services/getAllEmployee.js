import axios from "axios";
import axiosInstance from "./axiosInstance";

export function getAllEmployee(param) {
  const url = "https://deliver-store.tk/api/v1/employee/public-paging";

  return axiosInstance
    .get(url, {
      params: {
        PageIndex: param.PageIndex,
        PageSize: param.PageSize,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
