import axios from "axios";

const apiUrl = "http://localhost:3800";

export const fetchEquipments = async (token: string) => {
  const response = await axios.get(`${apiUrl}/equipment/get-equipments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const apiBaseUrl = apiUrl;

export const saveToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const removeToken = () => {
  localStorage.removeItem('token');
};