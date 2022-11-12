import axios from 'axios';
import axiosInstance from './axiosInstance';

export function getAllProvice() {
    const url = 'https://deliver-store.tk/api/v1/provinces/all-province';

    return axiosInstance
        .get(url, {})
        .then((response) => response.data)
        .catch((err) => console.log(err));
}