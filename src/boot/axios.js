import axios from 'axios';

// Crea una instancia de Axios
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/', // Cambia esto por tu URL base
    timeout: 10000, // Tiempo de espera en milisegundos
    headers: {
        'Content-Type': 'application/json', // Puedes agregar otros headers si es necesario
    },
});

// Puedes agregar interceptores si lo necesitas
axiosInstance.interceptors.request.use(
    (config) => {
        // Aquí puedes agregar lógica antes de enviar la solicitud
        return config;
    },
    (error) => {
        // Manejo de errores de la solicitud
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        // Aquí puedes manejar la respuesta antes de que llegue a tu componente
        return response;
    },
    (error) => {
        // Manejo de errores de la respuesta
        return Promise.reject(error);
    }
);

export { axiosInstance };
