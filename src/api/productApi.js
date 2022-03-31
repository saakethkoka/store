import axios from "axios";

const baseUrl = "https://api.johnlawrimore.com/";
const headers = {
    "Authorization": "jlawrimore"
}

const apiConfig = {
    headers: headers
}

export const getProductById = (id) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/store/products/${id}`, apiConfig)
        .then(res => resolve(res.data))
        .catch(err =>{
                alert(err)
                reject(err)
        });
});