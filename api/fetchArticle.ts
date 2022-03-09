import qs from "qs";
import { ArticleAttributes, ResponseMany } from "../types";

export const fetchArticle = async (params: any, locale: "en" | "uk") => {
  const articleQuery = qs.stringify({
    filters: {
      slug: {
        $eq: params["article-slug"],
      },
    },
    locale,
    populate: ["category"],
  });

  const articleRes = await fetch(
    `${process.env.API_BASE_URL}/articles?${articleQuery}`
  );

  const article: ResponseMany<ArticleAttributes> = await articleRes.json();

  return article;
};
