import axios from "axios";

const authApi = axios.create({
    baseURL:'http://localhost:3000/api/',
    params: {
        key: ''
    }
})

export default authApi