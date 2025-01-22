import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config.js';
import { connectDB } from './database/database.js';
import OpenAI from 'openai';

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
/*app.post('/completions', async (req, res) => {
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
});*/

const client = new OpenAI({
  baseURL: 'https://api-inference.huggingface.co/v1/',
  apiKey: 'hf_***', // Replace with your actual Hugging Face API key
});

app.post('/completions', async (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${client.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'google/gemma-2-2b-it',
      messages: [
        {
          role: 'user',
          content: req.body.message || 'What is the capital of France?', // Use the message from the request body
        },
      ],
      max_tokens: 500,
      stream: true,
    }),
  };

  let out = '';

  try {
    const stream = await fetch(
      'https://api-inference.huggingface.co/v1/chat/completions',
      options
    );

    if (!stream.ok) {
      const errorData = await stream.json();
      return res.status(stream.status).send(errorData); // Send the error response back
    }

    // Stream response
    const chunks = [];
    for await (const chunk of stream.body) {
      const newContent = chunk.choices[0]?.delta?.content;
      if (newContent) {
        out += newContent;
        console.log(newContent); // Log the new content
      }
    }

    res.status(200).send({ response: out }); // Send the final output back to the client
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).send('Server error');
  }
});

// Start your server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
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
