import axios from 'axios'

const BASE_URL = 'https://api.thecatapi.com/v1'

export const CatData = axios.create({
    baseURL: BASE_URL,
    headers: {
      "content-type":"application/json",
      'x-api-key' : process.env.API_KEY  
    }
  });