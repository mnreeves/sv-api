import { PostsTable } from "../model/posts_table"

export default async function ArticleListService(limit: number, offset: number) {
  return await PostsTable.findAll({
    attributes: [
      'title',
      'content',
      'category',
      'status'
    ],
    limit,
    offset,
    raw: true
  });
}