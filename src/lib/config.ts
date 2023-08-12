import doetenv from 'dotenv';

doetenv.config();

export const { PHARMACIST_SERVICE_URL = '' } = process.env;
