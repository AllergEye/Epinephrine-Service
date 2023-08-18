import doetenv from 'dotenv';

doetenv.config();

export const {
    PHARMACIST_SERVICE_URL = '',
    SURVEYOR_SERVICE_URL = '',
    PORT = 4000,
} = process.env;
