import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import fetch from 'node-fetch';
import config from './config.js';
import OpenAI from 'openai';
import generatingRouter from './routes/generatingRoutes.js';

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

// Root route
app.get('/', (req, res) => {
  res.send('Business Plan Generating Service');
});

app.use(generatingRouter);

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: 'sk-cdf69f76fd474ed58897a1bd72bb0bb9',
});

app.post('/completions', async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'user',
          content:
            'Write a well detailed business plan for resturant business. It should contain financial tables and pictures of financial chart',
        },
      ],
      max_tokens: 5000,
    });

    res.send(response.choices[0].message.content);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to get response from OpenAI API',
      details: error.message,
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!',
    details: err.message,
  });
});

// Start the server
const port = config.PORT;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
