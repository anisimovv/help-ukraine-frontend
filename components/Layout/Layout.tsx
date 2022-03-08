import { useRouter } from "next/router";
import Container from "../Container";
import Header from "../Header";

type Props = {
  children: any;
  navigation: any;
};

export const Layout = ({ children, navigation }: Props) => {
  const router = useRouter();

  return (
    <>
      <Header navigation={navigation} />
      <Container as="main">{children}</Container>
    </>
  );
};
