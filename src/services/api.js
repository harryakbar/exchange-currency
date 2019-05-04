import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.exchangeratesapi.io',
  responseType: 'json',
});

export async function getUSDBaseCurrency() {
  return instance.get('/latest?base=USD');
}
