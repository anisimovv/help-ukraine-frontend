import styles from "./Article.module.css";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import { ApiEntityData, ArticleAttributes } from "../../types";

interface Props {
  content: MDXRemoteSerializeResult;
  article: ApiEntityData<ArticleAttributes>;
}

export const Article = ({ content, article }: Props) => {
  return (
    <article>
      <header className={styles["Article-Header"]}>
        <Link
          href={`/${article.attributes.category?.data.attributes.slug}`}
          locale={article.attributes.locale}
        >
          <a className={styles["Article-BackButton"]}>
            <svg
              className={styles["Article-BackButtonIcon"]}
              width="16"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.667 12.539 1.333 7.205m0 0 5.334-5.333M1.333 7.205h13.334"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {article.attributes.category?.data.attributes.name}
          </a>
        </Link>
      </header>
      <section className="prose prose-lg lg:prose-xl">
        <h1>{article.attributes.title}</h1>
        <MDXRemote {...content} />
      </section>
    </article>
  );
};
