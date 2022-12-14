import { PostsTable } from "../model/table/posts_table"

export default async function ArticleListService(limit: number, offset: number) {
  return await PostsTable.findAll({
    attributes: [
      'id',
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