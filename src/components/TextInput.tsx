import { ChangeEvent } from "react";
import styles from "./TextInput.module.css";

interface Props {
  type?: "text" | "email" | "password" | "url";
  id: string;
  label: string;
  value: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
  type = "text",
  id,
  label,
  value,
  onChangeHandler,
}: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChangeHandler}
        className={styles.input}
      />
    </div>
  );
};
