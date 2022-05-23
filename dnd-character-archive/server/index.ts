import express from 'express';
import './mongoose.ts';
import cors from 'cors';
import characterRouter from './routers/characterRouter';

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(characterRouter);

app.listen(port, () => {
  console.log(`Server up on port ${port}.`);
});
