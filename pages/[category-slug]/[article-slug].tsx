import qs from "qs";
import { GetStaticPaths, GetStaticProps } from "next/types";
import React from "react";
import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";
import { fetchNavigation } from "../../api/fetchNavigation";
import { fetchArticle } from "../../api/fetchArticle";
import { fetchArticlesPaths } from "../../api/fetchArticlesPaths";
import { ApiEntityData, ArticleAttributes } from "../../types";

type Props = {
  article: ApiEntityData<ArticleAttributes>;
  navigation: any;
};

const Article = ({ article, navigation }: Props) => {
  return (
    <Layout navigation={<Navigation data={navigation.data} />}>
      <div>{article.attributes.title}</div>
      <div>{article.attributes.content}</div>
    </Layout>
  );
};

export default Article;

export const getStaticPaths = async () => {
  const paths = await fetchArticlesPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const article = await fetchArticle(params, locale as "en" | "uk");

  if (article.data.length === 0) {
    return {
      notFound: true,
    };
  }

  const navigation = await fetchNavigation(locale as "en" | "uk");

  return {
    props: {
      article: article.data[0],
      navigation,
    },
  };
};
