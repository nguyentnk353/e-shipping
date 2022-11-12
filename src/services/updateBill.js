import axios from 'axios';

export function updateBill(bill) {
  const url = 'https://deliver-store.tk/api/v1/bills';

  return axios
    .put(url, {
      billId: bill.billId,
      description: bill.description,
      categoryId: bill.categoryId,
      weight: bill.weight,
      price: bill.price,
      userId: bill.userId,
      startDepartmentId: bill.startDepartmentId,
      destinationDepartmentId: bill.destinationDepartmentId,
      address: bill.address,
      status: bill.status,
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
