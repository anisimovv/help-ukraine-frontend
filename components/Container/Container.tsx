import styles from "./Container.module.css";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export const Container = ({ children, className, as }: Props) => {
  const cslx = clsx(styles.Container, className && className);
  const Component = as || "div";

  return <Component className={cslx}>{children}</Component>;
};
