import styles from "./styles.module.css";
import saving from "../../../img/savings.svg";
import { LinkButton } from "../../layout/LinkButton";

export function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img
        src={saving}
        alt="Costs"
        width="740.67538"
        height="597.17519"
        loading="lazy"
      />
    </section>
  );
}
