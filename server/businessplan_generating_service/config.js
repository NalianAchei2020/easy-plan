import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  SECRET: process.env.JWT_SECRET,
  MONGOBD_URL: process.env.mongoDB_URL,
};
