import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { getTemplates, uploadTemplate } from '../controller/template.js';

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the 'files' directory exists
const uploadDir = path.resolve(__dirname, '../files');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
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
uploadRouter.post('/upload-file', upload.single('file'), uploadTemplate);

// Set up a static route to access uploaded files
uploadRouter.use('/uploads', express.static(uploadDir));

uploadRouter.get('/', getTemplates);

export default uploadRouter;
