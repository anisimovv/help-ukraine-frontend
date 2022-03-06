import qs from "qs";
import { ArticleAttributes, ResponseMany } from "../types";

export const fetchArticlesPaths = async () => {
  const articleQuery = qs.stringify({
    populate: "category",
    locale: "all",
  });

  const res = await fetch(
    `${process.env.API_BASE_URL}/articles?${articleQuery}`
  );

  const articles: ResponseMany<ArticleAttributes> = await res.json();

  const paths = articles.data.map((article: any) => {
    return {
      params: {
        "category-slug": article.attributes.category.data.attributes.slug,
        "article-slug": article.attributes.slug,
      },
      locale: article.attributes.locale,
    };
  });

  return paths;
};
