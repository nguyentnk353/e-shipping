import axios from 'axios';
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


  const data = {
    Description: props.Description,
    CategoryId: props.CategoryId,
    Weight: props.Weight,
    Price: props.Price,
    UserId: 1,
    StartDepartmentId: props.StartDepartmentId,
    DestinationDepartmentId: props.DestinationDepartmentId,
    Address: props.Address
  }

  // console.log(props)
  return axios
    .post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    )
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}
