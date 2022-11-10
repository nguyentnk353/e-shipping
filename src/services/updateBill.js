import axios from 'axios';
export function updateBill(props) {
    const url = 'https://deliver-store.tk/api/v1/bills';
     
    const data = {
        BillId: props.BillId,
        Description: props.Description,
        CategoryId: props.CategoryId,
        Weight: props.Weight,
        Price: props.Price,
        UserId: props.UserId,
        StartDepartmentId: props.StartDepartmentId,
        DestinationDepartmentId: props.DestinationDepartmentId,
        Address: props.Address,
        Status: "Active"
      };
    
      return axios
        .put(url, data,   {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        .then((response) => response.data)
        .catch((err) => console.log(err));
    }
