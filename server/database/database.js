import mongoose from 'mongoose';
import config from '../templating/config.js';

export const connectDB = async () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(config.mongoDB_URL, {
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
    })
    .then(() => {
      console.log('Connected to MongoDB');
      console.log('MongoDB URI:', config.mongoDB_URL);
    })
    .catch((error) => {
      console.log('Error connecting to MongoDB', error.message);
    });
};
