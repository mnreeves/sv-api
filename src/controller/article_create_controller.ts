import { Static, ValidationError } from 'runtypes';
import { SVRequest, SVResponse } from './../config/request_config';
import { ArticleCreateResponse } from '../model/response/article_create_response';
import ArticleCreateRequest from '../model/request/article_create_request';
import ArticleCreateService from '../service/article_create_service';

export default async function ArticleCreateController(
  req: SVRequest<Static<typeof ArticleCreateRequest>>,
  res: SVResponse<ArticleCreateResponse>
) {
  try {
    ArticleCreateRequest.check(req.body);
    
    await ArticleCreateService(req.body);
    res.status(201).send({
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
    
    res.status(500).send({
      result: false,
      message: `${error.message}`
    });
  }
}