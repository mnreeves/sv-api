import Cors from 'cors';
import { Config } from '../config/config';
import Express from 'express';
import { routerApp } from '../router';

const app = Express();
const port = Config.applicationPort;

export default function BootstrapExpress() {
  app.use(Cors());
  app.use(Express.json());
  app.use(Express.urlencoded({ extended: false }));
  app.use('', routerApp);
  app.listen(port, () => {
    console.log(`application running at port: ${port}`);
  });
}
