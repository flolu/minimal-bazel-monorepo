import * as faker from 'faker';
import * as express from 'express';

import { Constants } from '@lbm/enums';
import { hello } from '@lbm/hello';

import { add } from './util';

export const start = () => {
  const app = express();

  console.log(hello('test'));

  app.get('/alive', (req, res) => res.send('alive'));

  app.get('/name', (req, res) => {
    const name = faker.name.findName();
    res.send(`My name is ${name}`);
  });

  app.get('**', (req, res) => {
    const result = add(Number(Constants.Pi), Number(Constants.E));
    res.send(`${Constants.Pi} + ${Constants.E} = ${result}`);
  });

  app.listen(3000, () => console.log('gateway listening on port 3000'));
};

start();
