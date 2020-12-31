import axios from 'axios';
import API_URL from './apiurl';

const Axios = axios.create({

    baseURL: API_URL.BASE_URL,

    timeout: 15000,
});


Axios.interceptors.response.use(function (response) {

    return response;

}, function (error) {

    if (!error.response) return Promise.reject({ response: { status: 408, message: 'Request Timeout'} })

    return Promise.reject(error);
});


export const searchShipments = async () => {

    return Axios.get(`${API_URL.SEARCH_SHIPMENTS}`, {params: {}})
    
    .then(data => data.data)
    
    .catch(error => { throw error.response });
};

export const getShipment = async (params) => {

    return Axios.get(`${API_URL.SEARCH_SHIPMENTS}/${params.id}`, {params: {}})
    
    .then(data => data.data)
    
    .catch(error => { throw error.response });
};

export const getBids = async (params) => {

    return Axios.get(`${API_URL.SEARCH_BIDS}`, {params: params})
    
    .then(data => data.data)
    
    .catch(error => { throw error.response });
};

export const updateBid = async (params) => {

    return Axios.put(`${API_URL.UPDATE_BIDS}`, params)
    
    .then(data => data.data)
    
    .catch(error => { throw error.response });
};