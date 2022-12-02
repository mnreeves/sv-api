import { PostsTable } from './../model/table/posts_table';

export default async function ArticleDeleteService(articleId: number) {
  const article = await PostsTable.findByPk(articleId);
  if (article == null) {
    const error = new Error('article not found');
    error.name = 'NOT_FOUND';
    throw error;
  }

  // RECORD WILL BE SOFT DELETED
  // i.e status will be trash
  await PostsTable.update({ status: 'trash' }, {
    where: {
      id: article.id
    }
  });
}