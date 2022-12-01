import { Router } from 'express';
import ArticleCreateController from '../controller/article_create_controller';

export const routerApp = Router();

// register all routes here
routerApp.post('/', ArticleCreateController);