import axios from 'axios';

export function getBillById(billId) {
    const url = 'https://deliver-store.tk/api/v1/bills';
    // console.log('api: ' + billId)
    return axios
        .get(url + '/' + billId)
        .then((response) =>response.data)
        .catch((err) => console.log(err));
}

export default getBillById