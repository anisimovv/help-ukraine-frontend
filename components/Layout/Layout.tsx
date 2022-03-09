import clsx from "clsx";
import { useRouter } from "next/router";
import Container from "../Container";
import Header from "../Header";

type Props = {
  children: any;
  navigation: any;
  contentStyles?: any;
};

export const Layout = ({ children, navigation, contentStyles }: Props) => {
  return (
    <>
      <Header navigation={navigation} />
      <div style={contentStyles}>
        <Container as="main">{children}</Container>
      </div>
    </>
  );
};
