import { Static } from 'runtypes';
import ArticleListRequest from '../model/request/article_list_request';
import { ArticleListResponse } from '../model/response/article_list_response';
import ArticleListService from '../service/article_list_service';
import { SVRequest, SVResponse } from './../config/request_config';

export default async function ArticleListController(
  req: SVRequest<Static<typeof ArticleListRequest>>,
  res: SVResponse<ArticleListResponse>
) {
  try {
    if (req.params['limit'] === undefined) {
      const error = new Error('limit is required');
      error.name = 'VALIDATION_ERROR';
      throw error;
    }

    if (req.params['offset'] === undefined) {
      const error = new Error('offset is required');
      error.name = 'VALIDATION_ERROR';
      throw error;
    }

    const limit = parseInt(req.params['limit']);
    const offset = parseInt(req.params['offset']);
    const articles = await ArticleListService(limit, offset);
    res.status(200).send({
      result: true,
      message: 'success',
      data: {
        articles
      }
    });
  } catch (error: any) {
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