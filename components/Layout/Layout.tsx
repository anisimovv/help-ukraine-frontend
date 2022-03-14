import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/router";
import Container from "../Container";
import Header from "../Header";
import styles from "./Layout.module.css";
import Dialog from "../Dialog/Dialog";
import ContactForm from "../ContactForm";
import CloseButton from "../CloseButton";

type Props = {
  children: any;
  navigation: any;
  contentStyles?: any;
};

export const Layout = ({ children, navigation, contentStyles }: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClose = () => {
    setIsOpened(false)
  }

  return (
    <>
      <Header navigation={navigation} />
      <div style={contentStyles}>
        <Container as="main">{children}</Container>
        <button onClick={() => setIsOpened(true)} className={styles["button-request"]}>Зробити запит</button>
        <Dialog isOpened={isOpened} withBackdrop={true}>
          <ContactForm titleActionButton={<CloseButton onClose={handleClose} />} />
        </Dialog>
      </div>
    </>
  );
};
