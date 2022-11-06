import axios from 'axios';

export function checkLogin(props) {
  const url = 'https://deliver-store.tk/api/customer/authenticate';
  const LoginName = props.username;
  const Password = props.password;
  const error = { error: 'login-fail' };
  return axios
    .get(url, {
      params: {
        loginName: LoginName,
        password: Password,
      },
    })
    .then((response) => response.data)
    .catch((err) => error);
}
