import axios from 'axios';
import axiosInstance from './axiosInstance';
export function deleteBill(bill) {
  const url = 'https://deliver-store.tk/api/v1/bills/';
  return axiosInstance
    .delete(url + bill.billId)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
