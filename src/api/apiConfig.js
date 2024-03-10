import axios from 'axios';

export default axios.create({
    baseURL: 'https://movie-api-spring-backend.onrender.com/',
    headers: {"skip-browser-warning" : "true"}
})