import axios from 'axios';
import axiosInstance from './axiosInstance';

export function getAllCategories() {
  const url = 'https://deliver-store.tk/api/v1/categories/all-Category';

  return axiosInstance
    .get(url, {})
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
