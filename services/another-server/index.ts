import * as express from 'express';
import * as cors from 'cors';

import { Constants } from '@lbm/enums';

export const start = () => {
  const app = express();

  app.use(cors());

  app.get('/alive', (req, res) => res.send('alive'));

  app.get('/name', (req, res) => {
    res.json({ name: 'will be here soon!', Constants });
  });

  app.listen(3001, () => console.log('another server listening on port 3001'));
};

start();
