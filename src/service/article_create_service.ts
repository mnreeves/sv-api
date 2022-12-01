import { PostsTable } from './../model/posts_table';

type payload = {
  title: string,
  content: string,
  category: string,
  status: string
}


export default async function ArticleCreateService(payload: payload) {
  await PostsTable.create(payload);
}
