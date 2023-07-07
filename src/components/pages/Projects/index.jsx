import { useLocation } from "react-router-dom";
import { Message } from "../../layout/Message";
import styles from "./styles.module.css";
import { Container } from "../../layout/Container";
import { LinkButton } from "../../layout/LinkButton";

export function Projects() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Novo Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  );
}