import axios from 'axios';
import axiosInstance from './axiosInstance';

export function getAllBillOneUser(props) {

    const url = 'https://deliver-store.tk/api/v1/paging/bills/public-paging/' + props.userId;

    return axiosInstance
        .get(url, {
            params: {
                PageIndex: props.PageIndex,
                PageSize: props.PageSize,
                userid: props.userId
            }
        })
        .then((response) => response.data)
        .catch((err) => console.log(err));
}