import React from "react";
import styles from "./Textarea.module.css";

type Props = {
    title: string;
  placeholder: string;
  name: string;
  isDirty: boolean;
  error?: string | null;
  disabled?: boolean;
  blurHandler: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function Textarea({ title,
  error,
  isDirty,
  blurHandler,
  value,
  onChange,
  ...props }: Props) {
  
  return (
    <label className={styles["Textarea-Label"]}>
      <span className={styles["Textarea-Title"]}>{title}</span>
      <textarea
        value={value}
        onBlur={(e) => blurHandler(e)}
        onChange={(e) => onChange(e)}
        className={(error && isDirty) ? styles["Textarea-Textarea_error"] : styles["Textarea-Textarea"]}
        {...props}
      />
       {(error && isDirty) && (
        <span className={styles["Textarea-ErrorText"]}>{error}</span>
      )}
    </label>
  );
}

export default Textarea;
