import axios from 'axios';
import { API_URL, API_AUTH } from './config';

const getToken = async () => {
  axios
    .post(`${API_URL + API_AUTH}`, {
      email: 'mail@mail.domen',
      password: 'password',
    })
    .then((response) => {
      localStorage.setItem('auth-token', response.data.jwt);
      console.info('auth-token добавлен в localStorage')
    })
    .catch((error) => console.error('ошибка получения auth-token', error))
    };

  export default getToken;
