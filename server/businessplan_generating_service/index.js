import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config.js';
import { connectDB } from './database/database.js';

const app = express();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));

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
  res.send('Business Plan Generating Service');
});

// Auth routes
app.post('/completions', async (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer`,
      'Content-Type': 'application/json',
    },
  };
  try {
    fetch('https://api.openai.com/v1/chat/completions', options);
  } catch (error) {
    console.error(error);
  }
});
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
