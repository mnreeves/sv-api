import { Static, ValidationError } from 'runtypes';
import { SVRequest, SVResponse } from './../config/request_config';
import { ArticleUpdateResponse } from '../model/response/article_update_response';
import ArticleUpdateRequest from '../model/request/article_update_request';
import ArticleUpdateService from '../service/article_update_service';

export default async function ArticleUpdateController(
  req: SVRequest<Static<typeof ArticleUpdateRequest>>,
  res: SVResponse<ArticleUpdateResponse>
) {
  try {
    ArticleUpdateRequest.check(req.body);
    
    if (req.params['id'] === undefined) {
      const error = new Error('article id is required');
      error.name = 'VALIDATION_ERROR';
      throw error;
    }

    const articleId = parseInt(req.params['id']);
    await ArticleUpdateService(articleId, req.body);
    res.status(200).send({
      result: true,
      message: 'success'
    });
  } catch (error: any) {
    if (error instanceof ValidationError) {
      res.status(400).send({
        result: false,
        message: error.details ? Object.values(error.details).join('---') : 'bad request format'
      });
      return;
    }
    
    if (error.name === 'VALIDATION_ERROR') {
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