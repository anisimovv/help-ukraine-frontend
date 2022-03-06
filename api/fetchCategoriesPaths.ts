import qs from "qs";

import { ResponseMany, CategoryAttributes } from "../types";

export const fetchCategoriesPaths = async () => {
  const query = qs.stringify({
    locale: "all",
  });

  const res = await fetch(`${process.env.API_BASE_URL}/categories?${query}`);
  const categories: ResponseMany<CategoryAttributes> = await res.json();

  const paths = categories.data.map((category) => {
    return {
      params: { "category-slug": category.attributes.slug },
      locale: category.attributes.locale,
    };
  });

  return paths;
};
