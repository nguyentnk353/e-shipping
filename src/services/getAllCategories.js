import axios from 'axios';

export function getAllCategories() {
  const url = 'https://deliver-store.tk/api/v1/categories/all-Category';

  return axios
    .get(url, {})
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
