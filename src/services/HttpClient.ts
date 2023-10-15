import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_HTTPS_URL,
  withCredentials: true,
});

const HttpClient = {
  get: async (path: string, params = {}, headers = {}) => {
    const response = await axiosInstance.get(path, { params, headers });
    return response.data;
  },

  post: async (path: string, body?: unknown, headers = {
    "Content-Type": "application/json"
  }) => {
    const response = await axiosInstance.post(path, JSON.stringify(body), { headers });
    return response.data;
  },

  put: async (path: string, body?: unknown, headers = {
    "Content-Type": "application/json"
  }) => {
    const response = await axiosInstance.put(path, body, { headers });
    return response.data;
  },

  patch: async (path: string, body?: unknown, headers = {}) => {
    const response = await axiosInstance.patch(path, body, { headers });
    return response.data;
  },

  delete: async (path: string, headers = {}) => {
    const response = await axiosInstance.delete(path, { headers });
    return response.data;
  },
};

export default HttpClient;