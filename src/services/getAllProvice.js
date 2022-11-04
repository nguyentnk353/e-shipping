import axios from 'axios';

export function getAllProvice() {
    const url = 'https://deliver-store.tk/api/province/all-province';

    return axios
        .get(url, {})
        .then((response) => response.data)
        .catch((err) => console.log(err));
}