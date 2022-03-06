import Link from "next/link";
import { useRouter } from "next/router";
import Container from "../Container";
import styles from "./Navigation.module.css";

interface Props {
  data: any;
}

export const Navigation = ({ data }: Props) => {
  const router = useRouter();

  return (
    <nav className={styles.Navigation}>
      <Container>
        <ul className={styles["Navigation-List"]}>
          {data.map(({ attributes }: any) => (
            <li key={attributes.slug} className={styles["Navigation-ListItem"]}>
              <Link href={`/${attributes.slug}`} locale={attributes.locale}>
                <a
                  href="#"
                  className={`${styles["Navigation-Link"]} ${
                    router.query["category-slug"] === attributes.slug
                      ? styles["Navigation-Link_active"]
                      : ""
                  }`}
                >
                  {attributes.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
