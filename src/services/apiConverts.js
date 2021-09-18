import axios from 'axios';
axios.defaults.baseURL = 'https://api.fastforex.io/';
const apiKey = '8ea4d0bbab-ab04868c32-qzle3j';

export const getConverted = async ({fromCurrency,toCurrency,amount}) => {
  const response = await axios.get(`convert/?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&api_key=${apiKey}`);
  return response;
};

export const getAll = async (currentCurrency) => {
  const response = await axios.get(`fetch-all/?from=${currentCurrency}&api_key=${apiKey}`);
  return response;
};