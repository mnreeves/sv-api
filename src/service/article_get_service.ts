import { PostsTable } from './../model/posts_table';


export default async function ArticleGetService(articleId: number) {
  const article = await PostsTable.findByPk(articleId, {
    attributes: [
      'title',
      'content',
      'category',
      'status'
    ],
    raw: true
  });

  if (article == null) {
    const error = new Error('article not found');
    error.name = 'NOT_FOUND';
    throw error;
  }

  return article;
}