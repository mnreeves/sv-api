import { PostsTable } from './../model/table/posts_table';

type payload = {
  title?: string,
  content?: string,
  category?: string,
  status?: string
};

export default async function ArticleUpdateService(articleId:number, payload: payload) {
  const { title, content, category, status } = payload;

  const article = await PostsTable.findByPk(articleId);

  if (article == null) {
    const error = new Error('article not found');
    error.name = 'NOT_FOUND';
    throw error;
  }

  const updatedArticle = {
    ...(title && {title}),
    ...(content && {content}),
    ...(category && {category}),
    ...(status && {status}),
  };

  await PostsTable.update(updatedArticle, {
    where: {
      id: article.id
    }
  });
}