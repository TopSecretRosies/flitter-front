import axios from "axios";

const authApi = axios.create({
    baseURL:'',
    params: {
        key: 'clave de api web hay que poner aqui'
    }
})

export default authApi