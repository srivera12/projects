import express from 'express';
import cors from 'cors';
import Character from './models/character';
import './mongoose.ts';
import characterRouter from './routers/characterRouter';

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(characterRouter);

app.get('/test', (req, res) => {
  res.json({
    test: 'this is one.',
  });
});

app.listen(port, () => {
  console.log(`Server up on port ${port}.`);
});
