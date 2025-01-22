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
//connectDB();

// Root route
app.get('/', (req, res) => {
  res.send('Business Plan Generating Service');
});

// Auth routes
app.post('/completions', async (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.OPENAI_API}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo', // Ensure this is a valid model
      messages: [
        {
          role: 'user',
          content: 'How are you?', //req.body.message,
        },
      ],
      max_tokens: 100,
    }),
  };

  try {
    const response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      options
    );
    const data = await response.json();

    if (response.ok) {
      res.status(200).send(data);
    } else {
      // Handle API errors, including insufficient quota
      if (data.error && data.error.code === 'insufficient_quota') {
        res
          .status(429)
          .send(
            'Quota exceeded. Please upgrade your plan or check your usage.'
          );
      } else {
        res.status(response.status).send(data);
      }
    }
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).send('Server error');
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
