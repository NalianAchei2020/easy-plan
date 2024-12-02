import mongoose from 'mongoose';

const fileUploadSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  //originalname: { type: String, required: true },
  //mimetype: { type: String, required: true },
  //size: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const FileUpload = mongoose.model('FileUpload', fileUploadSchema);
export default FileUpload;
