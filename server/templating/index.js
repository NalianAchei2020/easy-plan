import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from './config.js';
import { connectDB } from './database/database.js';
import uploadRouter from './route/template.js';

const app = express();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

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

// file should be accessed fro anywhere
app.use('/files', express.static('files'));

// Use the upload routes
app.use('/api/template', uploadRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const port = config.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
