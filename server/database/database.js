import mongoose from 'mongoose';

export const connectDB = async () => {
  /*try {
    await mongoose.connect(
      'mongodb+srv://acheinaliannwanjoh:Gh6q3kG64BPZKays@cluster0.bee29.mongodb.net/',
      {
       
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
      }
    );
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Error connecting to MongoDB', error.message);
  }*/

  mongoose
    .connect(
      'mongodb+srv://acheinaliannwanjoh:Gh6q3kG64BPZKays@cluster0.bee29.mongodb.net/'
    )
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.log('Error connecting to MongoDB', error.message);
    });
};
