import axios from "axios";
import { useEffect } from "react";

const BASE_URL = 'http://localhost:3001';

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
