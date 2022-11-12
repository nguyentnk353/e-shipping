import axios from 'axios';
import axiosInstance from './axiosInstance';
export function caculatePrice(props) {
    const url = 'https://deliver-store.tk/api/v1/paging/bills/pricefororder';
     
    return axiosInstance
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
