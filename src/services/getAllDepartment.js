import axios from 'axios';
import axiosInstance from './axiosInstance';

export function getAllDepartment() {
    const url = 'https://deliver-store.tk/api/v1/departments/all-department';

    return axiosInstance
        .get(url, {})
        .then((response) => response.data)
        .catch((err) => console.log(err));
}