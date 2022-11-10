import axios from 'axios';

export function getAllBillOneUser(props) {

    const url = 'https://deliver-store.tk/api/v1/paging/bills/public-paging/' + props.userId;

    return axios
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