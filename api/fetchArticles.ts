import qs from "qs";
import { ArticleAttributes, ResponseMany } from "../types";

export const fetchArticles = async (params: any, locale: "en" | "uk") => {
  const articlesQuery = qs.stringify({
    locale,
    populate: ["category"],
    filters: {
      category: {
        slug: {
          $eq: params["category-slug"],
        },
      },
    },
  });

  const articlesRes = await fetch(
    `${process.env.API_BASE_URL}/articles?${articlesQuery}`
  );

  const articles: ResponseMany<ArticleAttributes> = await articlesRes.json();

  return articles;
};
