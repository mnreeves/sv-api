import { ArticleGetResponse } from './../model/article_get_response';
import { Static } from 'runtypes';
import { SVRequest, SVResponse } from './../config/request_config';
import ArticleGetRequest from '../model/article_get_request';
import ArticleGetService from '../service/article_get_service';


export default async function ArticleGetController(
  req: SVRequest<Static<typeof ArticleGetRequest>>,
  res: SVResponse<ArticleGetResponse>
) {
  try {
    if (req.params['id'] === undefined) {
      const error = new Error('article id is required');
      error.name = 'VALIDATION_ERROR';
      throw error;
    }

    const articleId = parseInt(req.params['id']);
    const article = await ArticleGetService(articleId);
    res.status(200).send({
      result: true,
      message: 'success',
      data: article
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