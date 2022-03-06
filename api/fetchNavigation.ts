import qs from "qs";

export const fetchNavigation = async (locale: "en" | "uk") => {
  const navigationQuery = qs.stringify({
    locale,
  });

  const navigationRes = await fetch(
    `${process.env.API_BASE_URL}/categories?${navigationQuery}`
  );

  return await navigationRes.json();
};
