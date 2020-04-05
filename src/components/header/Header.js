import React from "react";
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <NavLink exact activeClassName={styles.activeLink} to="/">Home</NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink activeClassName={styles.activeLink} to="/movies">Movies</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
