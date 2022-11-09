import axios from 'axios';
export function caculatePrice(props) {
    const url = 'https://deliver-store.tk/api/v1/paging/bills/pricefororder';
     
    return axios
      .get(url, {
        params: {
            categoryId: props.CategoryId,
            weight: props.Weight,
            startDepartmentId: props.StartDepartmentId,
            endDepartmentId: props.DestinationDepartmentId
        }
      })
      .then((response) => response.data)
      .catch((err) => console.log(err));
}
