import Link from "next/link";
import { ApiEntityData, ArticleAttributes } from "../../types";
import Card from "../Card";
import styles from "./ArticlesGrid.module.css";

interface Props {
  articles: ApiEntityData<ArticleAttributes>[];
}

export const ArticlesGrid = ({ articles }: Props) => {
  return (
    <ul className={styles.ArticlesGrid}>
      {articles.map((article) => {
        return (
          <li key={article.id}>
            <Link
              href={{
                pathname: "/[category-slug]/[article-slug]",
                query: {
                  "category-slug":
                    article.attributes.category?.data.attributes.slug,
                  "article-slug": article.attributes.slug,
                },
              }}
            >
              <a>
                <Card title={article.attributes.title} />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
