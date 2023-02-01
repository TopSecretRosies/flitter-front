import axios from "axios";

const flitterApi = axios.create({
    baseURL:'Access-Control-Allow-Origin: http://localhost:3000/api',
   
})

export default flitterApi