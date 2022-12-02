type article = {
  id: number,
  title: string,
  content: string,
  category: string,
  status: string
};

export type ArticleListResponse = {
  articles: article[]
}