import axios from 'axios';

export function deleteBill(bill) {
  const url = 'https://deliver-store.tk/api/v1/bills/';
  return axios
    .delete(url + bill.billId)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
