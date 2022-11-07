import axios from 'axios';

export function getAllProvice() {
    const url = 'https://deliver-store.tk/api/v1/provinces/all-province';

    return axios
        .get(url, {})
        .then((response) => response.data)
        .catch((err) => console.log(err));
}