import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import Container from "../Container";

type Props = {
  children: any;
  navigation: any;
};

export const Layout = ({ children, navigation }: Props) => {
  const router = useRouter();

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <h1>Як допомогти</h1>
            <div>
              <div
                onClick={() =>
                  router.push("/finansami", undefined, { locale: "uk" })
                }
              >
                Ukr
              </div>
              <div
                onClick={() =>
                  router.push("/finances", undefined, { locale: "en" })
                }
              >
                En
              </div>
            </div>
          </div>
        </Container>
        {navigation && navigation}
      </header>
      <Container as="main">{children}</Container>
    </>
  );
};
