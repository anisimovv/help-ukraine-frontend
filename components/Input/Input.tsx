import React from "react";
import styles from "./Input.module.css";

type Props = {
  type: string;
  title: string;
  placeholder: string;
  name: string;
  isDirty: boolean;
  error?: string | null;
  disabled?: boolean;
  blurHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  title,
  error,
  isDirty,
  blurHandler,
  value,
  onChange,
  ...props
}: Props) {


  return (
    <label className={styles["Input-Label"]}>
      <span className={styles["Input-Title"]}>{title}</span>
      <input
        value={value}
        onBlur={(e) => blurHandler(e)}
        onChange={(e) => onChange(e)}
        className={(error && isDirty) ? styles["Input-Input_error"] : styles["Input-Input"]}
        {...props}
      />
      {(error && isDirty) && (
        <span className={styles["Input-ErrorText"]}>{error}</span>
      )}
    </label>
  );
}

export default Input;
