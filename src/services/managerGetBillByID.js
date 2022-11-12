import axios from 'axios';

export function managerGetBillByID(param) {
  const url = 'https://deliver-store.tk/api/v1/bills/billid';
  return axios
    .get(url, {
      params: {
        PageIndex: param.PageIndex,
        PageSize: param.PageSize,
        billid: param.billid,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
