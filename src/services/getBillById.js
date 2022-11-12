import axios from 'axios';
import axiosInstance from './axiosInstance';

export function getBillById(billId) {
    const url = 'https://deliver-store.tk/api/v1/bills';
    // console.log('api: ' + billId)
    //console.log(billId);
    return axiosInstance
        .get(url + '/' + billId)
        .then((response) =>response.data)
        .catch((err) => console.log(err));
}

export default getBillById