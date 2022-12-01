import { Router } from 'express';
import ArticleCreateController from '../controller/article_create_controller';
import ArticleGetController from '../controller/article_get_controller';

export const articleRouter = Router();

// register all routes here
articleRouter.post('/', ArticleCreateController);
articleRouter.get('/:id', ArticleGetController)