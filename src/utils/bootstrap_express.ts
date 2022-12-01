import { Config } from '../config/config';
import Express from 'express';
import { routerApp } from '../router';

const app = Express();
const port = Config.applicationPort;

export default function BootstrapExpress() {
  app.use('', routerApp);
  app.listen(port, () => {
    console.log(`application running at port: ${port}`);
  });
}
