import axios from "axios";

const BASE_URL = 'https://api';

 const getDataApi = async (url) => {
    try {
        const data  = axios.get(BASE_URL + url)
        .then((products)=>{return products.data }); 
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export default getDataApi;
