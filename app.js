import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import authRouter from './router.js';
const app = express();

// allow cors
app.use(cors());
// prase json incoming req
app.use(express.json());
// extra security
app.use(helmet());

// routes
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.json('hola, testeando aws cognito');
});

export default app;
