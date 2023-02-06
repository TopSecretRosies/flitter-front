import axios, { AxiosHeaders } from "axios";

const flitterApi = axios.create({
    baseURL:'http://localhost:3000/api',
   
});


flitterApi.interceptors.request.use((config)=>{
    //Cogemos el token del localStorage 
    const token = localStorage.getItem('token');
    if (token){
        //En la web de la API que usamos especifican como conseguir el usuario con sesión -> En la cabecera (apartado Auth JWT de fakeapi.platzi.com/en/rest)
        (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); //JWT
    }
  
    return config;
  });
  



export default flitterApi