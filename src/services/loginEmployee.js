import axios from 'axios';

export function loginEmployee(props) {
  const url = 'https://deliver-store.tk/api/v1/employee/authenticate';
  const LoginName = props.username;
  const Password = props.password;
  const postData = {};
  const error = { error: 'login-fail' };
  return axios
    .post(url, postData, {
      params: {
        loginName: LoginName,
        password: Password,
      },
    })
    .then((response) => response.data)
    .catch((err) => err.response.data);
}
