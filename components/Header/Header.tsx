import styles from "./Header.module.css";
import { useRouter } from "next/router";
import Container from "../Container";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";

interface Props {
  navigation: React.ReactElement;
}

export const Header = ({ navigation }: Props) => {
  const router = useRouter();

  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles["Header-Content"]}>
          <Link href="/">
            <a>
              <h1 className={styles["Header-Logo"]}>Як допомогти</h1>
            </a>
          </Link>

          <Menu className={styles.Menu}>
            <MenuButton className={styles["Menu-Button"]}>
              {router.locale === "uk" ? "🇺🇦 Мова" : "🇺🇸 Language"}
            </MenuButton>
            <MenuList className={styles["Menu-List"]}>
              <MenuItem
                className={styles["Menu-Item"]}
                onSelect={() => {
                  router.push("/finansami", undefined, { locale: "uk" });
                }}
              >
                Українська
              </MenuItem>
              <MenuItem
                className={styles["Menu-Item"]}
                onSelect={() => {
                  router.push("/finances", undefined, { locale: "en" });
                }}
              >
                English
              </MenuItem>
            </MenuList>
          </Menu>

          {/* <div>
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
          </div> */}
        </div>
      </Container>
      {navigation && navigation}
    </header>
  );
};
