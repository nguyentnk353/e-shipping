import axios from 'axios';
import axiosInstance from './axiosInstance';
export function createNewOrder(props) {
  const url = 'https://deliver-store.tk/api/v1/bills';
  // const param = {
  //   Description: props.Description,
  //   CategoryId: props.CategoryId,
  //   Weight: props.Weight,
  //   Price: props.Price,
  //   UserId: 1,
  //   StartDepartmentId: props.StartDepartmentId,
  //   DestinationDepartmentId: props.DestinationDepartmentId,
  //   Address: props.Address
  // };
  // {
  //   headers: {
  //     'Content-Type': 'multipart/form-data'
  //   }
  // }

  const data = {
    Description: props.Description,
    CategoryId: props.CategoryId,
    Weight: props.Weight,
    Price: props.Price,
    UserId: props.UserId,
    StartDepartmentId: props.StartDepartmentId,
    DestinationDepartmentId: props.DestinationDepartmentId,
    Address: props.Address,
  };

  return axiosInstance
    .post(url, data)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}
