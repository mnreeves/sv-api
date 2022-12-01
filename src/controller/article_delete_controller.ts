import { Static } from 'runtypes';
import ArticleDeleteRequest from '../model/request/article_delete_request';
import { ArticleDeleteResponse } from '../model/response/article_delete_response';
import ArticleDeleteService from '../service/article_delete_service';
import { SVRequest, SVResponse } from './../config/request_config';


export default async function ArticleDeleteController(
  req: SVRequest<Static<typeof ArticleDeleteRequest>>,
  res: SVResponse<ArticleDeleteResponse>
) {
  try {
    if (req.params['id'] === undefined) {
      const error = new Error('article id is required');
      error.name = 'VALIDATION_ERROR';
      throw error;
    }

    const articleId = parseInt(req.params['id']);
    await ArticleDeleteService(articleId);
    res.status(204).send({
      result: true,
      message: 'success'
    });
  } catch (error: any) {
    if (error.name === 'VALIDATION_ERROR') {
      res.status(400).send({
        result: false,
        message: `${error.message}`
      });
      return;
    }

    if (error.name === 'NOT_FOUND') {
      res.status(400).send({
        result: false,
        message: `${error.message}`
      });
      return;
    }

    
    res.status(500).send({
      result: false,
      message: `${error.message}`
    });
  }
}