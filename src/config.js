// src/config.js
const config = {
    API_BASE_URL: process.env.NODE_ENV === 'production'
        ? 'https://counselling-backend-zs68.onrender.com'
        : 'http://localhost:5000',
};

export default config;
