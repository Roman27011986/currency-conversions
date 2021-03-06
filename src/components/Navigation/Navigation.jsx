import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'
export default function Navigation () {
  return (
      <nav>
        <ul className={styles.navBox}>
          <li>
          <NavLink
            to='/'
            exact
            className={styles.navBoxItem}
            activeClassName={styles.active}>
            Converter
          </NavLink>
        </li>
        
          <li>
          <NavLink
            to='/–°urrentExchangeRatesPage'
            className={styles.navBoxItem}
            activeClassName={styles.active}>
            –°urrent rate
          </NavLink>
          </li>
        </ul>
      </nav>
  );
};

