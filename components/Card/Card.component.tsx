import styles from "./Card.module.css";

interface Props {
  title: string;
}

export const Card = ({ title }: Props) => {
  return (
    <div className={styles.Card}>
      <h3 className={styles["Card-Title"]}>{title}</h3>
      <svg width="8" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className={styles["Card-Chevrone"]}
          d="M1.667 12.539 7 7.205 1.667 1.872"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
