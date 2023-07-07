import styles from "./styles.module.css";

export function Input({
  type,
  text,
  name,
  value,
  placeholder,
  handleOnChange,
}) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}
