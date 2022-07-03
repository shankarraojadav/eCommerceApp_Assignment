import axios from 'axios';

const url = 'http://localhost:8000';

export const productAdd =async (data) => {
     return await axios.post(`${url}`, data)
};

export const getProduct = async () => {
     return await axios.get(`${url}/getproducts`)
};

export const deleteProduct =async (id) => {
     return await axios.delete(`${url}/${id}`)
}