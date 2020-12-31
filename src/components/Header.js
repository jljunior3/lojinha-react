import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <NavLink
            to="/"
            activeClassName={styles.active}
            className={styles.link}
            end
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contato"
            activeClassName={styles.active}
            className={styles.link}
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
