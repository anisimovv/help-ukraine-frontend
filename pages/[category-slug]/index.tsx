import { GetStaticProps } from "next";
import { ApiEntityData, ArticleAttributes, ResponseMany } from "../../types";

import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";
import ArticlesGrid from "../../components/ArticlesGrid";

import { fetchCategoriesPaths } from "../../api/fetchCategoriesPaths";
import { fetchNavigation } from "../../api/fetchNavigation";
import { fetchArticles } from "../../api/fetchArticles";

interface Props {
  articles: ApiEntityData<ArticleAttributes>[];
  navigation: any;
}

const Categories = ({ articles, navigation }: Props) => {
  return (
    <Layout navigation={<Navigation data={navigation.data} />}>
      <ArticlesGrid articles={articles} />
    </Layout>
  );
};

export default Categories;

export const getStaticPaths = async () => {
  const paths = await fetchCategoriesPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const navigation = await fetchNavigation(locale as "en" | "uk");
  const articles = await fetchArticles(params, locale as "en" | "uk");

  return {
    props: {
      articles: articles.data,
      navigation,
    },
  };
};
