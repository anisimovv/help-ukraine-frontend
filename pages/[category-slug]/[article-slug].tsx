import { GetStaticProps } from "next/types";
import React from "react";
import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";
import { fetchNavigation } from "../../api/fetchNavigation";
import { fetchArticle } from "../../api/fetchArticle";
import { fetchArticlesPaths } from "../../api/fetchArticlesPaths";
import { ApiEntityData, ArticleAttributes } from "../../types";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import Head from "next/head";

type Props = {
  article: ApiEntityData<ArticleAttributes>;
  navigation: any;
  content: any;
};

const Article = ({ article, navigation, content }: Props) => {
  return (
    <>
      <Layout navigation={<Navigation data={navigation.data} />}>
        <div>{article.attributes.title}</div>
        <div className="prose"><MDXRemote {...content} /></div>
      </Layout>
    </>
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

  const articleData = article.data[0];

  const parsedContent = await serialize(articleData.attributes.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  const navigation = await fetchNavigation(locale as "en" | "uk");

  return {
    props: {
      article: articleData,
      content: parsedContent,
      navigation,
    },
  };
};
