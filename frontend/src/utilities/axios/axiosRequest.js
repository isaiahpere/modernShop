import axios from "axios";

/**
 * set instances of axios
 */
export const axiosRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
});
