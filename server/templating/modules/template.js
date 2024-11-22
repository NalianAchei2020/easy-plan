import mongoose from 'mongoose';

// Define the schema for file uploads
const fileUploadSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true, // Ensure the filename is provided
  },
  originalname: {
    type: String,
    required: true, // Store the original name of the file
  },
  mimetype: {
    type: String,
    required: true, // Store the MIME type of the file
  },
  size: {
    type: Number,
    required: true, // Store the size of the file in bytes
  },
  uploadDate: {
    type: Date,
    default: Date.now, // Automatically set the upload date
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model to reference
  },
});

const FileUpload = mongoose.model('FileUpload', fileUploadSchema);

export default FileUpload;
