import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Error connecting to MongoDB', error.message);
  }
};
