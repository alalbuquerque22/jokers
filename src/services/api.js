import axios from 'axios';

const api = axios.create({
    baseURL:'https://v2.jokeapi.dev',
    timeout:10000,
    timeoutErrorMessage:'Timeout Error'
})

export default api;