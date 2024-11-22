import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config.js';
import { connectDB } from '../database/database.js';
import uploadRouter from './route/template.js';

const app = express();

app.use(bodyParser.json());

app.use(cookieParser());

app.use(express.json);

connectDB();

app.get('/', (req, res) => {
  res.send('Templating service');
});

app.use('/api', uploadRouter);

const port = config.PORT;
app.listen(port, () => {
  console.log(`Sever is listening to port
     ${port}`);
});
