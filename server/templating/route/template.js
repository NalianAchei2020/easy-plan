import express from 'express';
import multer from 'multer';
import path from 'path';
import { uploadTemplate } from '../controllers/template.js';

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Create the upload middleware
const upload = multer({ storage });

// Create a router
const uploadRouter = express.Router();

// Define the upload route
uploadRouter.post('/upload', upload.single('template'), uploadTemplate);

// Set up a static route to access uploaded files
uploadRouter.use('/uploads', express.static(path.join(__dirname, 'uploads')));

export default uploadRouter;
