import { Router } from 'express';
import ArticleCreateController from '../controller/article_create_controller';

export const articleRouter = Router();

// register all routes here
articleRouter.post('/', ArticleCreateController);