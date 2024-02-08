import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config';

const app = express();

app.use(bodyParser.json());

app.use(cookieParser());

app.use(express.json);

const port = config.PORT;
app.listen(port, () => {
  console.log(`Sever is listening to  ${port}`);
});
