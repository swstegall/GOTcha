require('dotenv').config({path: '../.env'});
import bodyParser from 'body-parser';
import express, {NextFunction, Response, Request} from 'express';
import {addUser} from './routes/addUser';
import {authTest} from './routes/authTest';
import {login, verifyToken} from './routes/login';
import {checkBarcode} from './routes/checkBarcode';

const serverPort = process.env.REACT_APP_SERVER_PORT || '';
export const environment: string = process.env.ENVIRONMENT || '';

const app = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  if (process.env.ENVIRONMENT !== 'production') {
    res.header('Access-Control-Allow-Origin', '*');
  }
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-Width, Content-Type, Authorization, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use((req, res, next) => {
  if (req.originalUrl === '/login' || req.originalUrl === '/addUser') {
    next();
    return;
  }
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).send('User has no token!');
    return;
  }
  const t = token.substring(7);
  try {
    const verifiedToken = verifyToken(t) as {
      id: string;
      username: string;
    };
    req.headers.id = verifiedToken.id;
    req.headers.username = verifiedToken.username;
  } catch (err) {
    res.status(401).send(err.toString());
    return;
  }
  next();
});

app.post('/login', login);
app.post('/addUser', addUser);
app.post('/authTest', authTest);
app.post('/checkBarcode', checkBarcode);

const server = app.listen(serverPort);
const gracefulShutdown = () => {
  console.log('Received kill signal, shutting down gracefully.');
  server.close(() => {
    console.log('Closed out remaining connections.');
    process.exit(0);
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
