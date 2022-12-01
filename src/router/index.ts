import { Router } from 'express';

export const routerApp = Router();

// register all routes here
routerApp.post('/health', (req, res) => {
  res.send('oke')
})