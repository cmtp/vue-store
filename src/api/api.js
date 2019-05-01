import axios from 'axios';
import { URL, PORT } from '../utils/constants';

export default () => {
  return axios.create({
    baseURL: `${URL}:${PORT}`,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
};
