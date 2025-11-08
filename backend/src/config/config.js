const dotenv = require('dotenv');
dotenv.config();

const config = {
    PORT: process.env.PORT || 9000,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1d',
    CORS_ORIGIN: '*',
    API_BASE_URL: process.env.API_BASE_URL || '/api',
    FRONTEND_BASE_URL: process.env.FRONTEND_BASE_URL || 'http://localhost:3000',

    // APIs
    LANGUAGETOOL_API: "https://api.languagetool.org/v2/check",
    DEEPSEEK_API: process.env.DEEPSEEK_API_KEY,
    SAPLING_API_KEY: process.env.SAPLING_API_KEY,
    PLAGIARISM_API_KEY: process.env.PLAGIARISM_API_KEY,
};

module.exports = config;

