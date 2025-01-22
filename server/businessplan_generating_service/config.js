import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  MONGOBD_URL: process.env.mongoDB_URL,
};
