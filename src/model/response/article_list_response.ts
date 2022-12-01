type article = {
  title: string,
  content: string,
  category: string,
  status: string
};

export type ArticleListResponse = {
  articles: article[]
}