
import axios from 'axios';

export function getAllCategories() {
    const url = 'https://deliver-store.tk/api/v1/categories/all-Category';

    return axios
        .get(url, {})
        .then((response) => response.data)
        .catch((err) => console.log(err));
}

// options={getCategories.map((category) => ({
//     label: category.categoryName,
//     value: category.categoryId,
//   }))}


// const [getCategories, setGetCategories] = useState([]);
// const dropIcon = <CaretDownFilled />
// // const getcategory = getAllCategories();
// useMount(() => {
//     getAllCategories()
//         .then((data) => {
//             setGetCategories(data);
//         })
//         .catch((err) => console.log(err));
// });
// console.log(getCategories.map((category) => ({
//     label: category.categoryName,
//     value: category.categoryId,
// })));
// const onFinish = (values) => {
//     console.log(values);
// };