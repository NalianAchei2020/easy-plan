import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from './config.js';
import { connectDB } from '../database/database.js';
import uploadRouter from './route/template.js';

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: ['http://localhost:5173', '*'],
    methods: ['POST', 'GET', 'DELETE', 'PUT', 'PATCH'],
    credentials: true,
  })
);

// Connect to the database
connectDB();

// Root route
app.get('/', (req, res) => {
  res.send('Templating service');
});

// Use the upload routes
app.use('/api/template', uploadRouter);

// Start the server
const port = config.PORT || 5030;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
