import { articleRouter } from './article_router';
import { Router } from 'express';

export const routerApp = Router();

// register all routes here
routerApp.use('/article', articleRouter);