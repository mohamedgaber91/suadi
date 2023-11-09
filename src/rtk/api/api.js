import axios from "axios";
import { useEffect } from "react";

// useEffect(()=>{

// })
const BASE_URL = 'http://172.0.0.1/8090';

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
