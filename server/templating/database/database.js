import mongoose from 'mongoose';
import config from '../config.js';

export const connectDB = async () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(config.mongoDB_URL, {
      serverSelectionTimeoutMS: 50000,
      socketTimeoutMS: 60000,
      connectTimeoutMS: 60000,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.log('Failed to connect to MongoDB', error);
    });
};
