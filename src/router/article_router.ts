import { Router } from 'express';
import ArticleCreateController from '../controller/article_create_controller';
import ArticleDeleteController from '../controller/article_delete_controller';
import ArticleGetController from '../controller/article_get_controller';
import ArticleListController from '../controller/article_list_controller';
import ArticleUpdateController from '../controller/article_update_controller';

export const articleRouter = Router();

// register all routes here
articleRouter.get('/:limit/:offset', ArticleListController);
articleRouter.get('/:id', ArticleGetController);
articleRouter.patch('/:id', ArticleUpdateController);
articleRouter.delete('/:id', ArticleDeleteController);
articleRouter.post('/', ArticleCreateController);
