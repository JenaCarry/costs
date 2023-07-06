import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function LinkButton({ to, text }) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  );
}
