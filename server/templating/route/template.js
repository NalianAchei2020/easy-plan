// route/template.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { uploadTemplate } from '../controller/template.js';

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '..files');
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
uploadRouter.post('/upload', upload.single('file'), uploadTemplate);

// Set up a static route to access uploaded files
uploadRouter.use('/uploads', express.static(path.join(__dirname, 'files')));

export default uploadRouter;
