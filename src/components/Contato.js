import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import { Head } from "./Head";

export const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Lojinha | Contato" description="Entre em contato"></Head>
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>Júnior Souto</li>
          <li>99999-9999</li>
          <li>Rua Ali perto, 999</li>
        </ul>
      </div>
    </section>
  );
};
